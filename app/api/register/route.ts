import client from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
import { signIn } from "next-auth/react";
import { NextResponse } from "next/server";
import toast from "react-hot-toast";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await client.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });


  return NextResponse.json(user);
}
