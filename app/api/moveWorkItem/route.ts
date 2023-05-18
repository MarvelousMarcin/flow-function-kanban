import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

export async function POST(request: Request) {
  const body = await request.json();
  const workItemId = body.data.workItemId;
  const userId = body.data.userId;

  const findWorkItem = await prisma.workItem.findUnique({
    where: { id: workItemId },
  });

  if (findWorkItem) {
    // Check if Item has Blocker
    if (findWorkItem.blocker > 0) {
      await prisma.workItem.update({
        where: { id: workItemId },
        data: { blocker: findWorkItem.blocker - 1 },
      });
      return NextResponse.json({ msg: "Blocker removed" }, { status: 200 });
    }
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

  return NextResponse.json({}, { status: 200 });
}
