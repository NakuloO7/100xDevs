import { NextRequest, NextResponse } from "next/server";

import client from '@/db'

//This is the way to write the get endpoint in the next js
export async function GET() {
    return NextResponse.json({
        message : "This is the GET endpoint from /api/user",
        name : "Nakul",
        email : "nakul@gmail.com"
    })
}


export async function POST(req : NextRequest) {
    const body = await req.json();

    const resp = await client.user.create({
        data : {
            username : body.username,
            password : body.password
        }
    })
    
    console.log(resp.id);

    return NextResponse.json({
        message :  "User created successfully"
    })
}