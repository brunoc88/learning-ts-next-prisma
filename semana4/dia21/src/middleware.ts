import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {
    const token = await getToken({ req })
    const pathname = req.nextUrl.pathname

    // --- 1) Rutas que requieren estar logueado
    if (pathname.startsWith("/dashboard")) {
        if (!token) {
            return NextResponse.redirect(new URL("/login", req.url))
        }
        return NextResponse.next()
    }

    // --- 2) Rutas que requieren ser admin
    if (pathname.startsWith("/admin")) {
        if (!token) {
            return NextResponse.redirect(new URL("/login", req.url))
        }

        if (token.rol !== "admin") {
            return new NextResponse("No autorizado", { status: 403 })
        }

        return NextResponse.next()
    }

    // resto sin restricciones
    return NextResponse.next()
}

// Para que funcione el JWT en middleware
export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*"]
}
