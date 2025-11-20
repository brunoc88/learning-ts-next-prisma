import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

// Ejercicio 1
/*
export const POST = async (req: Request) => {
    try {
        const { name } = await req.json()

        let user = await prisma.user.create({
            data: {
                name
            }
        })

        return NextResponse.json({ mensaje: 'Usuario creado', user }, { status: 201 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}*/
/*
export const GET = async () => {
    try {
        const users = await prisma.user.findMany()
        return NextResponse.json({ mensaje: 'lista de usuarios', users }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}

// Ejercicio 2

export const GET = async () => {
    const users = await prisma.user.findMany({
        include:{posts:true}
    })
    return NextResponse.json({users})
}
*/

// Ejercicio 3
export const GET = async () => {
    const users = await prisma.user.findMany({ where: { name: { contains: "a" } } })
    if (!users) return NextResponse.json({ mensaje: 'No hubo exito en la busqueda' }, { status: 404 })
    return NextResponse.json({ users })
}

// Ejercicio 5
// Con errores
/*
export const POST = async (req: Request) => {
  try {
    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: { name: "shakespeare" } // 🔥 esto fallará si ya existe
      });

      const post = await tx.posts.create({
        data: {
          name: "Post ligado",
          userId: user.id
        }
      });

      
    });

    // Ahora sí devolvés el response final fuera de la transacción
    return NextResponse.json(
      { mensaje: "Transacción OK", data: result },
      { status: 201 }
    );

  } catch (error: any) {
    return NextResponse.json(
      { mensaje: "Falló la transacción, se hizo rollback", error: error.message },
      { status: 500 }
    );
  }
};
*/

// sin error

export const POST = async (req: Request) => {
  try {
    const { name, title } = await req.json();

    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({ data: { name } });
    
      let namex = title
      const post = await tx.posts.create({
        data: { name:namex, userId: user.id }
      });

      return { user, post };
    });

    return NextResponse.json({ mensaje: "OK", data: result }, { status: 201 });

  } catch (error: any) {
    return NextResponse.json(
      { mensaje: "Falló la transacción, rollback aplicado", error: error.message },
      { status: 500 }
    );
  }
};
