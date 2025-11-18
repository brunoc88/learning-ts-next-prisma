# 📘 Día 18 – Prisma: Modelos y Relaciones (Teoría)

## 1. Introducción

Hoy profundizamos en cómo Prisma maneja modelos y relaciones entre tablas, incluyendo 1:1, 1:N y N:N. Esto es esencial para diseñar bases de datos consistentes.

---

## 2. Relaciones 1:1

Una relación uno a uno implica que un registro en la tabla A tiene como máximo un registro relacionado en la tabla B.

**Ejemplo:**

model User {
  id     Int     @id @default(autoincrement())
  profile Profile?
}

model Profile {
  id     Int  @id @default(autoincrement())
  bio    String
  user   User @relation(fields: [userId], references: [id])
  userId Int  @unique
}

---

## 3. Relaciones 1:N

Una relación uno a muchos significa que un registro en A puede tener múltiples registros relacionados en B.

**Ejemplo:**

model Post {
  id      Int     @id @default(autoincrement())
  title   String
  user    User    @relation(fields: [userId], references: [id])
  userId  Int
}

model User {
  id    Int    @id @default(autoincrement())
  posts Post[]
}

---

## 4. Relaciones N:N

Una relación muchos a muchos implica que múltiples registros en A se relacionan con múltiples registros en B.

**Ejemplo(relación implícita):**

model User {
  id      Int      @id @default(autoincrement())
  name    String
  roles   Role[]
}

model Role {
  id    Int    @id @default(autoincrement())
  name  String
  users User[]
}

Prisma crea automáticamente una tabla intermedia.

---

## 5. Claves primarias y foráneas

- **Claves primarias `(@id)`**: identifican de manera única un registro.

- **Claves foráneas** (fields, references): enlazan modelos.

- `@unique` evita duplicados.

---

## 6. Consideraciones importantes

- Mantener consistencia entre fields y references.

- Usar nombres claros para relaciones.

- Revisar migraciones antes de aplicarlas.

---