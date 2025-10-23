# Día 17: Prisma - Introducción y Setup

## 🧠 ¿Qué es Prisma?

Prisma es un **ORM moderno para Node.js y TypeScript** que facilita la interacción con bases de datos.  
Traduce tus modelos definidos en un archivo `schema.prisma` a código TypeScript con tipos y métodos seguros.

Permite:
- Modelar datos con un lenguaje declarativo (schema).
- Generar automáticamente consultas tipadas.
- Ejecutar migraciones de forma sencilla.
- Conectarte fácilmente a bases como PostgreSQL, MySQL, SQLite, MongoDB, etc.

---

## ⚙️ Instalación y configuración básica

1. **Instalar Prisma CLI:**
   ```bash
   npm install prisma --save-dev
   npm install @prisma/client
   ```

2. **Inicializar Prisma en tu proyecto:**
   ```bash
   npx prisma init
   ```

   Esto crea:
   ```
   📁 prisma/
   ┗ 📄 schema.prisma
   📄 .env
   ```

3. **Configurar la conexión en `.env`:**
   ```env
   DATABASE_URL="file:./dev.db"
   ```

   (Por defecto usa SQLite, ideal para desarrollo).

---

## 🧩 Archivo `schema.prisma`

Ejemplo básico:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model User {
  id       Int     @id @default(autoincrement())
  nombre   String
  email    String  @unique
  password String
  creadoEn DateTime @default(now())
}
```

---

## 🚀 Migraciones y generación del cliente

1. **Crear una migración:**
   ```bash
   npx prisma migrate dev --name init
   ```
   Esto crea la base de datos y genera el cliente.

2. **Generar cliente manualmente (si hiciste cambios en el schema):**
   ```bash
   npx prisma generate
   ```

3. **Explorar la base de datos (opcional):**
   ```bash
   npx prisma studio
   ```
   Abre un panel web donde podés ver y editar registros.

---

## 🧩 Uso en código

Ejemplo de conexión en un archivo `lib/prisma.ts`:

```ts
import { PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()
```

Y en tus rutas o controladores:
```ts
const users = await prisma.user.findMany()
```

---

## ✅ Conclusión

Prisma reemplaza a los ORM tradicionales con una experiencia más fluida y segura.  
Su mayor ventaja es el **tipado automático en TypeScript** y las **migraciones controladas**.
