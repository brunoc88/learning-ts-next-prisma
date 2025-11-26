import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { prisma } from "@/lib/prisma"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",

            async authorize(credentials) {
                // 1️⃣ Revisamos si mandaron datos
                if (!credentials?.email || !credentials?.password) return null

                // 2️⃣ Buscar usuario en BD
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email }
                })

                // Usuario no existe
                if (!user) return null

                // 3️⃣ Validar contraseña
                const isValid = await bcrypt.compare(credentials.password, user.password)
                if (!isValid) return null

                // 4️⃣ Retornar objeto usuario sin password
                return {
                    id: user.id,
                    email: user.email
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    },

    pages: {
        signIn: "/login" // opcional si querés tu página custom
    }
})

export { handler as GET, handler as POST }
