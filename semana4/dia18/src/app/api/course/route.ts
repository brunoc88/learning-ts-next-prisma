import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const POST = async (req: Request) => {
    try {
        const body = await req.json()
        const course = await prisma.course.create({data:body})
        return NextResponse.json({mensaje:'Curso creado', course},{status:201})
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export const GET = async () => {
    try {
        const courses = await prisma.course.findMany({include:{student:true}})
        return NextResponse.json({mensaje:'Listado de cursos', courses},{status:200})
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 }) 
    }
}