# Día 20: Integración Prisma + Next.js --- Teoría

## 1. Prisma en Next.js

Prisma se integra perfectamente con Next.js tanto en API Routes como en
Server Components.

### Arquitectura recomendada

-   **`prisma/schema.prisma`** define el modelo.
-   **Cliente Prisma** se inicializa en un archivo como `lib/prisma.ts`.

``` ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

## 2. Prisma en API Routes

Ejemplo básico en `app/api/users/route.ts`:

``` ts
import { prisma } from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

export async function POST(req: Request) {
  const data = await req.json();
  const user = await prisma.user.create({ data });
  return Response.json(user);
}
```

## 3. Prisma en Server Components

En archivos del directorio `app/` (RSC):

``` ts
import { prisma } from "@/lib/prisma";

export default async function Page() {
  const users = await prisma.user.findMany();
  return (
    <div>
      <h1>Usuarios</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
```

## 4. Manejo de conexión a DB

-   En desarrollo, Next refresca módulos y puede crear *muchos*
    clientes.
-   Se usa el patrón `globalThis` para evitar instancias múltiples.
-   En producción esto no ocurre.

## 5. Buenas prácticas

-   Usa `try/catch` en API Routes.
-   Valida la entrada del usuario.
-   Usa `zod` o `yup` para schemas.
-   Hacer `SELECT` dentro de Server Components es válido.
-   Evita transacciones grandes en RSC; usa API Routes para eso.
