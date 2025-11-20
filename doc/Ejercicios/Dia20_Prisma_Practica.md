# Día 20: Integración Prisma + Next.js --- Práctica

## Ejercicio 1 --- Crear modelo y migración

1.  Agregar al `schema.prisma` un modelo `Post`:

``` prisma
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  createdAt DateTime @default(now())
}
```

2.  Ejecutar:

```{=html}
<!-- -->
```
    npx prisma migrate dev --name create_post_model

## Ejercicio 2 --- API Route CRUD

Crear archivo: `app/api/posts/route.ts`

Implementar: - `GET`: obtener posts - `POST`: crear post

## Ejercicio 3 --- Server Component mostrando posts

Crear página: `app/posts/page.tsx`

Debe: - Obtener posts con Prisma. - Renderizar lista simple.

## Ejercicio 4 --- Formulario cliente + acción para crear post

1.  Crear un formulario en `app/posts/new/page.tsx`.
2.  Usar una Server Action:

``` ts
"use server";
import { prisma } from "@/lib/prisma";

export async function createPost(data: FormData) {
  const title = data.get("title");
  return prisma.post.create({
    data: { title: title as string },
  });
}
```

## Ejercicio 5 --- Bonus: CRUD completo

-   Implementar `PUT` y `DELETE` usando API Routes.
-   Crear UI para editar y borrar.
