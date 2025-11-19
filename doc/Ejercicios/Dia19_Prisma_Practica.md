# 📗 **Día 19 – Prisma (Práctica)**  

# Día 19: Prisma – Práctica

## Ejercicio 1: CRUD completo
1. Crear un usuario.
2. Listar todos los usuarios.
3. Actualizar un usuario existente.
4. Eliminar un usuario por ID.

## Ejercicio 2: Consultas anidadas
- Crear un usuario con dos posts asociados.
- Consultar usuarios incluyendo sus posts con:
```ts
include: { posts: true }
```

## Ejercicio 3: Filtros avanzados

- Buscar usuarios cuyo nombre contenga una letra específica.

```ts
where: { name: { contains: "a" }}
```

- Listar posts creados en los últimos 7 días.

```ts
where: {
  createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
}
```

## Ejercicio 4: Transacciones

- Crear un usuario y un post dentro de una transacción.
- Probar qué ocurre si una de las operaciones falla y verificar el rollback.

```ts
await prisma.$transaction(async (tx) => {
  const user = await tx.user.create({ data: { name: "Bruno" }});
  await tx.post.create({
    data: { title: "Post ligado", userId: user.id }
  });
});

```