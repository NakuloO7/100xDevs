// lib/prisma.ts
import { PrismaClient } from "@prisma/client";
const globalForPrisma = global as unknown as { prisma: PrismaClient };

console.log("inside the db.ts file");

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

console.log("Prima client created");


if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;