// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { prisma } from "@/lib/prisma"

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })
        if (!user) return null

        const isValid = await bcrypt.compare(credentials.password, user.password)
        if (!isValid) return null

        return { id: user.id, email: user.email, rol: user.rol }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = typeof user.id === "string" ? Number(user.id) : user.id
        token.rol = user.rol
      }
      return token
    },
    async session({ session, token }) {
      if (!session.user) session.user = {} as any
      session.user.id = token.id
      session.user.rol = token.rol
      session.user.email = token.email
      return session
    },
  },

  session: { strategy: "jwt" as const },
  pages: { signIn: "/login" },
}

// Export del handler de NextAuth con los métodos HTTP requeridos por App Router
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
