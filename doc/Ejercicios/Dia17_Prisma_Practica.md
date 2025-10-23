# Día 17: Prisma - Práctica - Setup y migraciones

## 🎯 Objetivo
Instalar y configurar Prisma, crear tu primer modelo, correr migraciones y probar el cliente.

---

## 🧩 Paso 1: Instalación
Desde tu proyecto (por ejemplo, `dia17`):

```bash
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
```

---

## ⚙️ Paso 2: Configuración de `.env`

Por defecto:
```env
DATABASE_URL="file:./dev.db"
```

Esto crea una base SQLite en `prisma/dev.db`.

---

## 🧱 Paso 3: Definir modelo en `prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Product {
  id        Int      @id @default(autoincrement())
  nombre    String
  precio    Float
  creadoEn  DateTime @default(now())
}
```

---

## 🚀 Paso 4: Crear migración y generar cliente

```bash
npx prisma migrate dev --name init
```

Esto:
- Crea el archivo `dev.db`.
- Genera el cliente Prisma tipado.

---

## 🧪 Paso 5: Probar Prisma Client

Crea `src/app/api/products/route.ts`:

```ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const products = await prisma.product.findMany()
  return NextResponse.json(products)
}

export async function POST(req: Request) {
  const body = await req.json()
  const product = await prisma.product.create({ data: body })
  return NextResponse.json(product)
}
```

---

## 🔍 Paso 6: Testear
1. Abrí el servidor:  
   ```bash
   npm run dev
   ```
2. Visitá:
   - `GET /api/products` → lista productos
   - `POST /api/products` → crea un nuevo producto

---

## 🧭 Paso 7: Explorar con Prisma Studio

```bash
npx prisma studio
```
Abre una interfaz visual para explorar los registros en el navegador.

---

## ✅ Resultado final
Ya tenés Prisma instalado, la base creada, el modelo definido y las rutas API funcionando con base de datos real.
