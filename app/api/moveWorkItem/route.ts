import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);
  const workItemId = body.data.workItemId;

  const findWorkItem = await prisma.workItem.findUnique({
    where: { id: workItemId },
  });
  if (findWorkItem) {
    await prisma.workItem.update({
      where: { id: workItemId },
      data: { stage: findWorkItem.stage + 1 },
    });
  }

  return NextResponse.json({}, { status: 200 });
}
