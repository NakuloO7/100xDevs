"use server"
//as this is a server action component we have to define it explicitly

import prisma from "@/db";

export async function signup(email :string, password :string) {

  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    });

    return true;
  } catch (error) {
    return false;
  }
}
