import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();


export const PUT = async (req: Request,  { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params; // ← ESTE await es obligatorio

    const { name } = await req.json();

    const user = await prisma.user.update({
        where: { id: Number(id) },
        data: { name },
    });

    return Response.json({ mensaje: "Usuario actualizado", user });
}

export const DELETE = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    await prisma.user.delete({
        where: { id: Number(id) }
    });
    return Response.json({ mensaje: "eliminado" });

}


