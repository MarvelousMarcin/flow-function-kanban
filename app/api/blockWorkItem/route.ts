import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

export async function POST(request: Request) {
  const body = await request.json();
  const workItemId = body.data.workItemId;
  const userId = body.data.userId;

  const findWorkItem = await prisma.workItem.findUnique({
    where: { id: workItemId },
  });
  if (findWorkItem && findWorkItem.stage !== 1 && findWorkItem.stage !== 4) {
    await prisma.workItem.update({
      where: { id: workItemId },
      data: { blocker: findWorkItem.blocker + 1 },
    });
    const moveNewItem = await prisma.workItem.findFirst({
      where: { stage: 1, table: findWorkItem.table },
    });
    if (moveNewItem)
      await prisma.workItem.update({
        where: { id: moveNewItem?.id },
        data: { stage: moveNewItem?.stage + 1, ownerId: userId },
      });
  }

  return NextResponse.json({}, { status: 200 });
}
