import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import bcrypt from "bcrypt"

export const POST = async (req: Request) => {
    try {
        const { email, password } = await req.json()

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        })

        return NextResponse.json({ msj: 'Usuario creado' }, {status:201})
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}