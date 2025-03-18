import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

import { signInInputs, signUpInputs } from "@nakul_123/inkspire-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate()); //generating the prisma client

  //create a user
  try {
    //zod validation
    const { success } = signUpInputs.safeParse(body);
    if (!success) {
      c.status(403);
      return c.json({
        message: "Invalid inputs",
      });
    }

    //here you don't have to find if the user already exists because of the check at the database level
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
      },
    });
    //create a jwt
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
  } catch (error) {
    return c.status(403);
  }
});

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    //zod validation
    const { success } = signInInputs.safeParse(body);
    if (!success) {
      c.status(403);
      return c.json({
        message: "Invalid inputs",
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ error: "Invalid Credentials" });
    }
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ jwt });
  } catch (error) {
    c.status(403);
  }
});
