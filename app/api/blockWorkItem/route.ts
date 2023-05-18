import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

export async function POST(request: Request) {
  const body = await request.json();
  const workItemId = body.data.workItemId;
  const userId = body.data.userId;

  const findWorkItem = await prisma.workItem.findUnique({
    where: { id: workItemId },
    include: { owner: { include: { game: true } } },
  });

  const activeDat = Number(findWorkItem?.owner?.game?.day);
  const userMoves = findWorkItem?.owner?.moves as number;
  const gameKey = findWorkItem?.game_id;

  if (Number(activeDat) === Number(userMoves)) {
    return NextResponse.json(
      { msg: "You have already made your move" },
      { status: 200 }
    );
  }

  if (findWorkItem && findWorkItem.stage !== 1 && findWorkItem.stage !== 4) {
    // User move + 1
    await prisma.user.update({
      where: { id: userId },
      data: { moves: userMoves + 1 },
    });

    await prisma.workItem.update({
      where: { id: workItemId },
      data: { blocker: findWorkItem.blocker + 1 },
    });
    const moveNewItem = await prisma.workItem.findFirst({
      where: { stage: 1, table: findWorkItem.table },
    });
    if (moveNewItem) {
      await prisma.workItem.update({
        where: { id: moveNewItem?.id },
        data: { stage: moveNewItem?.stage + 1, ownerId: userId },
      });
    }
    const ifAllUsersMoved = await prisma.user.findMany({
      where: { NOT: { moves: activeDat } },
    });

    if (ifAllUsersMoved.length === 0) {
      await prisma.game.update({
        where: { code: gameKey },
        data: { day: activeDat + 1 },
      });
      return NextResponse.json({ nextDay: true }, { status: 200 });
    } else {
      return NextResponse.json({ nextDay: false }, { status: 200 });
    }
  }

  return NextResponse.json({}, { status: 200 });
}
