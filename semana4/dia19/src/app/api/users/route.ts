import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export const POST = async (req: Request) => {
    try {
        const { name } = await req.json()

        let user = await prisma.user.create({
            data: {
                name
            }
        })

        return NextResponse.json({ mensaje: 'Usuario creado', user }, { status: 201 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export const GET = async () => {
    try {
        const users = await prisma.user.findMany()
        return NextResponse.json({ mensaje: 'lista de usuarios', users }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}

