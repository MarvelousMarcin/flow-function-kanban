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

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
      await prisma.workItem.create({
        data: {
          blocker: 0,
          game_id: newGame.code,
          table: tables[i],
          start: 0,
          stage: 0,
        },
      });
    }
  }

  return NextResponse.json({ msg: "Success" }, { status: 200 });
}