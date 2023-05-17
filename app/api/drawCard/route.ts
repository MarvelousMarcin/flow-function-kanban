import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const user_id = body.userId;

  const isGreen = Number(Math.random().toFixed()) === 1 ? true : false;

  if (isGreen) {
    return NextResponse.json({ card: "green" });
  } else {
    return NextResponse.json({ card: "red" });
  }
}
