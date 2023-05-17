import { NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

export async function POST(request: Request) {
  const body = await request.json();

  const name = body.data.name;
  const key = body.data.gameKey;

  const color = "#888221";

  const findUser = await prisma.user.findMany({
    where: { gameKey: key, name },
  });

  if (findUser.length !== 0) {
    return NextResponse.json(findUser, { status: 200 });
  } else {
    const newUser = await prisma.user.create({
      data: { name: name, gameKey: key, color },
    });
    console.log(newUser);

    return NextResponse.json(newUser, { status: 200 });
  }
}
