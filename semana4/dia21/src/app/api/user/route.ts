import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

export const POST = async (req: Request) => {
    try {
        const { email, password, rol } = await req.json()

        const hashedPassword = await bcrypt.hash(password, 10)

        await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                rol
            }
        })

        const user = {
            email,
            rol
        }

        return NextResponse.json({ msj: 'Usuario creado', user }, {status:201})
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}