import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export const POST = async (req: Request) => {
    const { name, userId } = await req.json()
    const post = await prisma.posts.create({
        data: {
            name,
            userId
        }
    })
    return NextResponse.json({ mensaje: 'post creado', post })
}

