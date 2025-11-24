import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import bcrypt, { genSalt } from "bcrypt"

export const POST = async (req:Request) => {
    try {
        const {email, password} = await req.json()

        const hashpassword = await bcrypt.hash(password,10)
        const user = await prisma.user.create({data:
            {
                email, 
                password:hashpassword
            }
        })

        return NextResponse.json({msj: 'usuario creado', user})
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}