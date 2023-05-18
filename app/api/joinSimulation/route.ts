import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

function generateRandomHexColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

export async function POST(request: Request) {
  const body = await request.json();

  const name = body.data.name;
  const key = body.data.gameKey;

  const findUser = await prisma.user.findMany({
    where: { gameKey: key, name },
  });

  function generateRandomNumber(): number {
    return Math.floor(Math.random() * 4);
  }

  if (findUser.length !== 0) {
    return NextResponse.json(findUser, { status: 200 });
  } else {
    const table = ["Strategic Value", "Development", "Release", "Desing"];

    const newUser = await prisma.user.create({
      data: {
        name: name,
        gameKey: key,
        color: generateRandomHexColor(),
        table: table[generateRandomNumber()],
      },
    });

    return NextResponse.json(newUser, { status: 200 });
  }
}
