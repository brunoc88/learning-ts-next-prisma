# Día 16: Next.js - API Routes y Middleware

## 🧩 Introducción
En Next.js podemos crear **API Routes** que funcionan como endpoints del servidor, sin necesidad de Express u otro backend separado.  
Estos endpoints viven dentro de la carpeta `/app/api` o `/pages/api` (según la versión del proyecto).

---

## 🚀 1. API Routes en Next.js

Una API Route exporta funciones `GET`, `POST`, `PUT`, `DELETE`, etc., según el método HTTP que queramos manejar.

### 📘 Ejemplo básico
```tsx
// app/api/hello/route.ts
export async function GET() {
  return Response.json({ message: 'Hola desde la API!' })
}
```

📍 Ruta disponible en: `/api/hello`  
Responde con un JSON: `{ "message": "Hola desde la API!" }`

---

## ⚙️ 2. Manejo de métodos

Podemos definir múltiples métodos en el mismo archivo:

```tsx
// app/api/users/route.ts
export async function GET() {
  return Response.json({ message: 'Obteniendo usuarios' })
}

export async function POST(req: Request) {
  const body = await req.json()
  return Response.json({ message: 'Usuario creado', data: body })
}
```

---

## 🔐 3. Middleware en Next.js

El **middleware** intercepta las peticiones **antes** de que lleguen a las rutas o páginas.  
Se define en el archivo `middleware.ts` en la raíz del proyecto.

### Ejemplo de autenticación
```tsx
// middleware.ts
import { NextResponse } from 'next/server'

export function middleware(req) {
  const token = req.cookies.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
```

📍 Este middleware protege cualquier ruta que comience con `/dashboard`.

---

## 🧠 4. Casos de uso comunes

| Tipo de Middleware | Descripción |
|---------------------|--------------|
| **Autenticación** | Verifica tokens o sesiones. |
| **Logging** | Registra peticiones en consola o un archivo. |
| **Rate Limiting** | Limita cantidad de requests por IP. |

---

## 🧰 5. Ventajas de las API Routes
✅ No necesitás un servidor Express separado.  
✅ Pueden usar SSR/ISR junto con frontend.  
✅ Escalan fácilmente en Vercel.  

---

## 🧩 6. Buenas prácticas
- Usar `Response.json()` para devolver datos.
- Manejar errores con `try/catch` y `Response.error()`.
- Validar inputs antes de procesar.
- Reutilizar middlewares (autenticación, logging).

