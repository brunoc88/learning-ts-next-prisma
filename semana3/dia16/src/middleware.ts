import { NextResponse } from 'next/server'
// ejercicio 3
/*
export function middleware(req) {
  console.log('📡 Petición:', req.method, req.url)
  return NextResponse.next()
}

export const config = {
  // esto indica que los middlewares se van a ejecutar en las rutas
  // que empiecen con /api
  matcher: ['/api/:path*'], 
}
*/
// ejercicio 4
export function middleware(req) {
  const token = req.cookies.get('token')?.value // ✅ importante: .value

  if (!token) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/api/products/:path*'], // 👈 sólo se aplica a /api/products
}