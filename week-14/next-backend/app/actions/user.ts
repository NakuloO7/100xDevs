
// actions/user.ts
"use server"; // This directive marks the file as containing Server Actions

import client from "@/db";

export async function signup(username: string, password: string) {
  // You can add validation logic here (e.g., using Zod)
  const user = await client.user.create({
    data: {
      username,
      password,
    },
  });

  console.log(user.id);

  return "Signed up!";
}
