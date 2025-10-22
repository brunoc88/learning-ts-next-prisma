# Día 16: Next.js - Práctica: API Routes y Middleware

## 🧠 Objetivo
Aprender a crear endpoints API y protegerlos con middleware de autenticación y logging.

---

## 🧩 Ejercicio 1: Endpoint básico

1. Crea una carpeta `/app/api/products`.
2. Dentro, agrega un archivo `route.ts` con:

```tsx
export async function GET() {
  const products = [
    { id: 1, name: 'Producto A' },
    { id: 2, name: 'Producto B' },
  ]
  return Response.json(products)
}
```
3. Verificá en el navegador: `/api/products`.

---

## 🧩 Ejercicio 2: Endpoint POST con body

1. En el mismo archivo, agrega:
```tsx
export async function POST(req: Request) {
  const body = await req.json()
  return Response.json({ message: 'Producto agregado', data: body })
}
```
2. Probalo con **Postman** o **Thunder Client** (VSCode).

---

## 🧩 Ejercicio 3: Middleware de logging

1. Crea un archivo `middleware.ts` en la raíz del proyecto.
2. Agrega:

```tsx
import { NextResponse } from 'next/server'

export function middleware(req) {
  console.log('📡 Petición:', req.method, req.url)
  return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*'],
}
```
3. Revisá la consola del servidor cada vez que hagas una request.

---

## 🧩 Ejercicio 4: Middleware de autenticación

1. En `middleware.ts`, agregá validación:

```tsx
export function middleware(req) {
  const token = req.cookies.get('token')

  if (!token) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
  }

  return NextResponse.next()
}
```
2. Probá la ruta `/api/products` con y sin cookie `token`.

---

## 🧩 Ejercicio 5: Combinando todo

✅ Creá rutas API seguras con autenticación.  
✅ Logueá las peticiones en consola.  
✅ Probá tus endpoints con distintas combinaciones de headers y cookies.

---

## 💪 Resultado esperado
Al final de esta práctica:
- Podrás crear y proteger rutas API.
- Entenderás cómo funciona `middleware.ts`.
- Tendrás una base sólida para agregar JWT o rate limiting.
