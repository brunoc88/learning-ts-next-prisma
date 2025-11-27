import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    id: number
    rol: string
  }

  interface Session {
    user: {
      id: number
      rol: string
      email?: string | null
    }
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number
    rol: string
  }
}
