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
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { game: true },
  });

  const activeDat = Number(user?.game?.day);
  const userMoves = user?.moves as number;
  const gameKey = findWorkItem?.game_id;

  if (Number(activeDat) === Number(userMoves)) {
    return NextResponse.json(
      { msg: "You have already made your move" },
      { status: 200 }
    );
  }
  if (findWorkItem) {
    // User move + 1
    await prisma.user.update({
      where: { id: userId },
      data: { moves: userMoves + 1 },
    });

    // Check if Item has Blocker
    if (findWorkItem.blocker > 0) {
      await prisma.workItem.update({
        where: { id: workItemId },
        data: { blocker: findWorkItem.blocker - 1 },
      });
    } else {
      if (findWorkItem.stage === 1) {
        await prisma.workItem.update({
          where: { id: workItemId },
          data: { stage: findWorkItem.stage + 1, ownerId: userId },
        });
      } else {
        await prisma.workItem.update({
          where: { id: workItemId },
          data: { stage: findWorkItem.stage + 1 },
        });
      }
    }
  }

  const ifAllUsersMoved = await prisma.user.findMany({
    where: { NOT: { moves: activeDat }, gameKey },
  });

  console.log(ifAllUsersMoved);

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
