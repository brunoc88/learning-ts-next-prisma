import { prisma } from "@/lib/prisma";
import UserSchema from "@/schema/userSchema";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const { name, age } = await req.json()

        const parsed = await UserSchema.safeParseAsync({ name, age })
        if (!parsed.success) {
            return NextResponse.json({ msj: 'Faltan datos', errors: parsed.error.flatten().fieldErrors }, { status: 400 })
        }
        const user = await prisma.user2.create({
            data: {
                name,
                age
            }
        })
        return NextResponse.json({ msj: 'usuario creado', user }, { status: 201 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}