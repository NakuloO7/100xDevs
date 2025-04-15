import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";
const prisma = new PrismaClient();


export async function GET() {
    const user = await prisma.user.findFirst({});
    return NextResponse.json({
        username : user?.username
    })
}

export async function POST(req : NextRequest){
    const body = await req.json();

    try {
        let user = await prisma.user.create({
            data : {
                username : body.username,
                password : body.password
            }
        })
        return NextResponse.json({
            message : "User Created Successfully",
            user
        })
    } catch (error) {
        return NextResponse.json({error : "Error while creating the user"});
    }
}