import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const POST = async(req:Request) => {
    const body = await req.json()
    await prisma.post.create({data:body})
    return NextResponse.json('post creado',{status:201})
}

export const GET = async () => {
    const posts = await prisma.post.findMany()
    return NextResponse.json({msj:'lista de posts', posts},{status:200})
}