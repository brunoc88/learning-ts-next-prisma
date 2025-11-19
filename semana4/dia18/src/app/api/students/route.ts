import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const student = await prisma.student.create({
      data: {
        name: body.name,
        course: {
          connect: body.courses.map((id: number) => ({ id }))
        }
      },
      include: { course: true }
    })

    return NextResponse.json(student, { status: 200 })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}


export const GET = async () => {
    try {
        const students = await prisma.student.findMany()
        return NextResponse.json({mensaje:'Listado de Alumnos', students},{status:200})
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 }) 
    }
}