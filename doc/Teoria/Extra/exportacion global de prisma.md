# Explicación línea por línea del snippet de Prisma

``` ts
import { PrismaClient } from "@prisma/client";
```

Importa la clase `PrismaClient`, que es la interfaz principal para
interactuar con la base de datos.

``` ts
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };
```

Crea una referencia al objeto global (`globalThis`) y le dice a
TypeScript que espere que pueda contener una propiedad `prisma`.\
Esto se hace para *compartir* una misma instancia de Prisma en modo
desarrollo.

``` ts
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });
```

Aquí: 1. Si `globalForPrisma.prisma` **ya existe**, usa esa instancia.
2. Si no existe, crea una nueva instancia de `PrismaClient`. 3.
`log: ["query"]` hace que Prisma imprima cada query SQL en la consola
(solo para debug).

Esto evita crear múltiples instancias de Prisma cada vez que Next.js
hace un *hot reload* en desarrollo.

``` ts
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

En desarrollo: - Guarda la instancia creada en el objeto global para
reutilizarla. En producción: - No usa el objeto global, para evitar
fugas de memoria y porque en producción no hay hot reload.

------------------------------------------------------------------------

## Resumen

Este patrón: - Evita múltiples conexiones simultáneas a la base de datos
en modo desarrollo. - Reutiliza la misma instancia de Prisma. - Funciona
perfectamente con Next.js App Router.
