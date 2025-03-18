import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import {
  createBlogInput,
  CreateBlogInputs,
  updateBlogInput,
  UpdateBlogInputs,
} from "@nakul_123/inkspire-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

//auth middleware
//  any route which comes here will use this middleware
blogRouter.use("/*", async (c, next) => {
  try {
    const jwt = c.req.header("Authorization");
    if (!jwt) {
      c.status(401);
      return c.json({
        error: "Unauthorized",
      });
    }

    const token = jwt.split(" ")[1];
    const payload = await verify(token, c.env.JWT_SECRET);

    if (!payload) {
      c.status(401);
      return c.json({ error: "unauthorized" });
    }
    c.set("userId", String(payload.id));
    await next();
  } catch (error) {
    c.status(403);
    return c.json({ error: "You are not logged in" });
  }
});

//create a new blog
blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    //zod validation
    const { success } = createBlogInput.safeParse(body);

    if (!success) {
      c.status(403);
      return c.json({
        message: "Invalid inputs",
      });
    }
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: Number(userId),
      },
    });

    return c.json({
      id: blog.id,
    });
  } catch (error) {
    c.status(403);
  }
});

//update the existing blog
blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  const userId = c.get("userId"); //userid of the logged in user
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {

    const { success } = updateBlogInput.safeParse(body);

    if (!success) {
      c.status(403);
      return c.json({
        message: "Invalid inputs",
      });
    }

    const blog = await prisma.blog.update({
      where: {
        id: body.id,
        authorId: Number(userId),
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.text("Updated blog");
  } catch (error) {
    c.status(403);
  }
});

//get all the blogs at once
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogs = await prisma.blog.findMany({
    select : {
      content : true,
      title : true,
      id : true,
      author : {
        select: {
          name : true
        }
      }
    }
  });
  return c.json({
    blogs,
  });
});

//getting the specified
//Todo : add pagination
blogRouter.get("/:id", async (c) => {
  const reqId = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.findUnique({
      where: {
        id: Number(reqId),
      },
      select :{
        id : true,
        title : true,
        content :true,
        author : {
          select : {
            name : true
          }
        }
      }
    });

    return c.json({
      blog,
    });
  } catch (error) {
    c.status(403);
    return c.json({
      message: "Error while fetching blog",
    });
  }
});
