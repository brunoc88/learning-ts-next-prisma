import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

type Context = {
    params: {
        id: string
    }
}

export const PUT = async (req: Request, { params }: Context) => {
    try {
        const { id } = await params
        const { title } = await req.json()

        const cambios = await prisma.post.update({ where: { id: Number(id) }, data: { title } })
        return NextResponse.json({ mensaje: 'Cambios realizados', cambios })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

export const DELETE = async (req: Request, { params }: Context) => {
    try {
        const { id } = await params

        await prisma.post.delete({ where: { id: Number(id) } })
        return NextResponse.json({ mensaje: 'post eliminado' })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }

}