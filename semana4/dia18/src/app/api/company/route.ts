import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


export async function POST(req: Request) {
    try {
        const body = await req.json()

        const company = await prisma.company.create({
            data: body
        })

        return NextResponse.json({
            mensaje: "Compañía creada",
            company
        })
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export async function GET() {
    try {
        const companies = await prisma.company.findMany({
            include: { address: true }
        })

        return NextResponse.json(companies)
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}