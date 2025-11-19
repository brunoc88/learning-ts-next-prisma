import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(req:Request) {
    try {
        const body = await req.json()
        const book = await prisma.book.create({ data: body })
        return NextResponse.json({mensaje:'Libro creado', book},{status:200})

    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500})
    }
}

export async function GET() {
    try {
        const books = await prisma.book.findMany({include:{author:true}})
        return NextResponse.json({mensaje:'Lista de libros', books},{status:200})

    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500})
    }
}