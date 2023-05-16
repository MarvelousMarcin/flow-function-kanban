import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

const tables = ["Strategic Value", "Desing", "Development", "Release"];

function getRandomGameCode(): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }
  return code;
}

export async function GET() {
  let newGameCode = getRandomGameCode();

  const findGame = await prisma.game.findUnique({
    where: { code: newGameCode },
  });
  if (findGame) {
    newGameCode = getRandomGameCode();
  }

  const newGame = await prisma.game.create({ data: { code: newGameCode } });

  const workItems = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
      const workItem = await prisma.workItem.create({
        data: {
          blocker: 0,
          game_id: newGame.code,
          table: tables[i],
          start: 0,
          stage: 1,
        },
      });
      workItems.push(workItem);
    }
  }

  return NextResponse.json({ data: workItems }, { status: 200 });
}
