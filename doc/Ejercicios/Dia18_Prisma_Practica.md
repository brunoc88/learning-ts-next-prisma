# 🛠️ Día 18 – Prisma: Modelos y Relaciones (Práctica)

## Ejercicio 1: Crear una relación 1:1

Crea un modelo Company y otro Address donde:
    - Cada compañía tiene una única dirección.
    - La dirección debe tener un companyId único.

**Resultado esperado:**

```prisma
model Company {
  id      Int      @id @default(autoincrement())
  name    String
  address Address?
}

model Address {
  id        Int     @id @default(autoincrement())
  street    String
  company   Company @relation(fields: [companyId], references: [id])
  companyId Int     @unique
}
```

---

## Ejercicio 2: Relación 1:N

Crea un modelo Author y Book:
    - Un autor puede tener muchos libros.
    - Cada libro tiene un solo autor.

---

## Ejercicio 3: Relación N:N

Crea una relación N:N entre Student y Course.

---

## Ejercicio 4: Validar migraciones

1. Ejecuta npx prisma migrate dev --name day18.
2. Revisa la tabla intermedia generada en el caso del ejercicio N:N.
3. Inserta datos de prueba con Prisma Client.

---

## Ejercicio 5: Consultas

Ejecuta consultas con Prisma Client:

```ts
// Obtener autor con sus libros
prisma.author.findMany({
  include: { books: true }
});
```

---