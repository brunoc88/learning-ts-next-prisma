import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(req:Request) {
    try {
        const body = await req.json()
        const author = await prisma.author.create({ data: body })
        return NextResponse.json({mensaje:'Author creado', author},{status:200})

    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500})
    }
}

export async function GET() {
    try {
        const authors = await prisma.author.findMany()
        return NextResponse.json({mensaje:'Lista de autores', authors},{status:200})

    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500})
    }
}