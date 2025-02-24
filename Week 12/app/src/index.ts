import { PrismaClient } from "@prisma/client/edge";

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const prisma = new PrismaClient({ datasourceUrl: env.DATABASE_URL });
    const url = new URL(req.url);

    if (req.method === "GET" && url.pathname === "/users") {
      const users = await prisma.user.findMany();
      return Response.json(users);
    }

    if (req.method === "POST" && url.pathname === "/users") {
      try {
        const body = (await req.json()) as { name: string; email: string; password: string };

        if (!body.name || !body.email || !body.password) {
          return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
        }

        const user = await prisma.user.create({ data: body });
        return Response.json(user);
      } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message || "Something went wrong" }), { status: 400 });
      }
    }

    return new Response("Not Found", { status: 404 });
  }
};