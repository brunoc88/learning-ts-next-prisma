# Día 19: Consultas básicas y avanzadas

## 1. ¿Qué es Prisma?
Prisma es un ORM moderno para Node.js que facilita la interacción con la base de datos mediante un cliente fuertemente tipado y consultas simples.

## 2. Prisma Client
Prisma Client es la interfaz para ejecutar consultas. Se genera automáticamente a partir del esquema (`schema.prisma`).

### Ejemplo básico
```ts
const users = await prisma.user.findMany();
```

## 3. CRUD con Prisma

### Crear

```ts
await prisma.user.create({
  data: { name: "Bruno", email: "bruno@example.com" }
});
```

### Leer

```ts
await prisma.user.findUnique({
  where: { id: 1 }
});
```

### Actualizar

```ts
await prisma.user.update({
  where: { id: 1 },
  data: { name: "Nuevo nombre" }
});
```

### Borrar

```ts
await prisma.user.delete({
  where: { id: 1 }
});
```

## 4. Consultas anidadas

`include`:
include sirve para traer datos relacionados en una misma consulta.
Prisma entiende las relaciones declaradas en tu schema.prisma (1:N, N:N, etc.) y te permite consultarlas fácilmente.

📌 ¿Qué significa?

- Devuelve todos los usuarios

- Y además sus posts asociados

```ts
await prisma.user.findMany({
  include: { posts: true }
});
```

## 5. Transacciones

Las transacciones permiten ejecutar varias consultas como un bloque indivisible:
Si una falla, todas se deshacen (rollback).

Prisma tiene dos formas de transacciones:

🔹 A) Transacciones por array (rápidas y simples)

```ts
await prisma.$transaction([
  prisma.user.create({ data: { name: "Bruno" }}),
  prisma.post.create({ data: { title: "Primer post" }})
]);

```

📌 Características:

- Todas las operaciones se ejecutan juntas.

- Si una falla → ninguna se guarda.

- Ideal para operaciones simples.


🔹 B) Transacciones interactivas (más poderosas)

Te permiten ejecutar código dentro de una función que recibe un cliente transaccional.

```ts
await prisma.$transaction(async (tx) => {
  const user = await tx.user.create({
    data: { name: "Bruno" }
  });

  await tx.post.create({
    data: {
      title: "Post dentro de TX",
      userId: user.id
    }
  });
});
```

📌 Ventajas:

- Podés ejecutar lógica compleja.

- Podés usar el resultado de una consulta dentro de la misma transacción.

- Garantiza consistencia total.