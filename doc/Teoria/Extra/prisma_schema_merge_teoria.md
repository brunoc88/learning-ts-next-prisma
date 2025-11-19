# Prisma - Separación de Esquemas (Schema Merging)

## ¿Qué es el schema merging?

Permite dividir el archivo `schema.prisma` en múltiples archivos para
organizar los modelos de forma modular. Prisma combinará todos los
fragmentos automáticamente al generar el cliente.

------------------------------------------------------------------------

## 1. Estructura recomendada

    prisma/
     ├─ schema.prisma
     └─ models/
          ├─ user.prisma
          ├─ post.prisma
          └─ category.prisma

------------------------------------------------------------------------

## 2. Archivo principal: `schema.prisma`

``` prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

import {
  User,
  Post,
  Category
} from "./models/*"
```

------------------------------------------------------------------------

## 3. Archivos de modelos

### `models/user.prisma`

``` prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
  posts Post[]
}
```

### `models/post.prisma`

``` prisma
model Post {
  id       Int    @id @default(autoincrement())
  title    String
  content  String?
  userId   Int
  user     User   @relation(fields: [userId], references: [id])
}
```

### `models/category.prisma`

``` prisma
model Category {
  id   Int    @id @default(autoincrement())
  name String
}
```

------------------------------------------------------------------------

## 4. Generar el cliente

    npx prisma generate

Prisma unificará todos los fragmentos en un único esquema.

------------------------------------------------------------------------

## 5. Ventajas del schema merging

-   Mayor organización
-   Escalabilidad para proyectos grandes
-   Mejor colaboración entre equipos
-   Estructura modular y mantenible

------------------------------------------------------------------------

## 6. Requisitos de versión

Los imports funcionan desde Prisma **v4.10+**.

Verificar versión:

    npx prisma -v
