# Día 22: Validación de datos con Zod y TypeScript — Práctica

## Ejercicio 1 — Validar un formulario simple
Crear un schema:

```ts
const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});
```

Tareas:
1. Crear un formulario con `email` y `password`.
2. Usar una Server Action para validarlos.
3. Mostrar errores individuales.

---

## Ejercicio 2 — Validación anidada
Crear un schema:

```ts
const ProfileSchema = z.object({
  name: z.string().min(2),
  age: z.number().min(18),
  address: z.object({
    city: z.string(),
    zip: z.string().min(3)
  })
});
```

Tareas:
- Validar un objeto completo.
- Probar errores en cada nivel.

---

## Ejercicio 3 — Refinements personalizados
Crear validación:

```ts
const PasswordSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string().min(8)
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas deben coincidir",
  path: ["confirmPassword"]
});
```

Tareas:
- Probar datos válidos e inválidos.
- Mostrar errores en UI.

---

## Ejercicio 4 — Validación con transformaciones
Crear:

```ts
const NumberSchema = z.string().transform((val) => Number(val));
```

Tareas:
- Convertir string → number.
- Validar que el número sea válido.

---

## Ejercicio 5 — Validación asincrónica
Crear:

```ts
const RegisterSchema = z.object({
  email: z.string().email().refine(async (email) => {
    const exists = await db.user.findUnique({ where: { email }});
    return !exists;
  }, "Email ya registrado"),
  password: z.string().min(6)
});
```

Tareas:
- Simular una DB fake.
- Probar casos donde el email exista / no exista.

---

## Ejercicio 6 — Validación en una API Route
Crear endpoint:

```
POST /api/users
```

Validar con:

```ts
const UserSchema = z.object({
  name: z.string(),
  age: z.number().min(18)
});
```

Tareas:
- Usar `safeParse`.
- Devolver `400` si es inválido.
- Devolver el usuario si es válido.

---

## Ejercicio 7 — Inferencia de tipos
Dado:

```ts
const ProductSchema = z.object({
  title: z.string(),
  price: z.number()
});
```

Tareas:
- Crear `type Product = z.infer<typeof ProductSchema>`.
- Usarlo en una función TypeScript.
- Hacer que falle si el tipo no coincide.

---

## Ejercicio 8 — Validación para Server Actions con diferentes tipos de datos
Ejemplo:

```ts
const FormSchema = z.object({
  email: z.string().email(),
  age: z.coerce.number().min(18)
});
```

Tareas:
- Recibir `FormData`.
- Coaccionar valores a número.
- Validar y retornar errores `flatten`.

---

## Bonus — Crear un schema modular
Separar:

- `schemas/user.ts`
- `schemas/product.ts`

Importar en APIs y Server Actions para reutilizar validación.

