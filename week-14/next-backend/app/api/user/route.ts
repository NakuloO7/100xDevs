import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient()

//dummy hardcoded api
export async function GET() {
    const user = await prisma.user.findFirst({});
    return NextResponse.json({
        username : user?.username,
        email : user?.password
    })
}

export async function POST(request : NextRequest, response :NextResponse) {
    const userData = await request.json();

     const user = await prisma.user.create({
        data: {
            username: userData.username,
            password: userData.password
        }
    });

    return NextResponse.json({
        username : userData.username,
        pasword : userData.password
    })
}