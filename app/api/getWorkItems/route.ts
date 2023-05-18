import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

export async function POST(request: Request) {
  const body = await request.json();

  const gameCode = body.data.gameCode;

  const allWorkItems = await prisma.workItem.findMany({
    where: { game_id: gameCode },
    include: { owner: true },
  });

  const strategic = allWorkItems.filter(
    (item) => item.table === "Strategic Value"
  );
  const developemnt = allWorkItems.filter(
    (item) => item.table === "Development"
  );
  const desing = allWorkItems.filter((item) => item.table === "Design");
  const release = allWorkItems.filter((item) => item.table === "Release");

  return NextResponse.json(
    {
      "Strategic Value": strategic,
      Development: developemnt,
      Design: desing,
      Release: release,
    },
    { status: 200 }
  );
}
