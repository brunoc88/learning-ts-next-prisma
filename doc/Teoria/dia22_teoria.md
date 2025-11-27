# Día 22: Validación de datos con Zod y TypeScript — Teoría

## ¿Qué es Zod?
Zod es una librería de TypeScript-first para validación y parsing de datos.  
Su objetivo es garantizar que los datos que recibimos cumplen un *schema* estricto.

Zod:
- Valida
- Hace parse
- Devuelve errores claros
- Autogenera tipos TypeScript a partir de schemas (`z.infer`)

---

## Ventajas de Zod
- Tipos derivados automáticamente.
- Validación del lado del servidor y del cliente.
- Validaciones asincrónicas.
- Composición de schemas complejos.
- Refinamientos y super refinamientos.

---

## Conceptos clave

### ✔ Schema
```ts
const UserSchema = z.object({
    name: z.string(),
    age: z.number().min(18)
});
```

### ✔ Parse
```ts
UserSchema.parse(data); // Lanza excepción si es inválido
```

### ✔ Safe parse
```ts
const result = UserSchema.safeParse(data);
```

### ✔ Infer (tipo TS)
```ts
type User = z.infer<typeof UserSchema>;
```

---

## Validadores comunes
- `string()`, `number()`, `boolean()`, `date()`, `enum()`
- `.min(n)`, `.max(n)`, `.email()`, `.url()`, `.uuid()`, `.optional()`, `.nullable()`
- `.default()`
- `.transform(fn)`
- `.refine(fn, "msg")`
- `.superRefine((val, ctx) => ...)`

---

## Validación anidada

```ts
const PostSchema = z.object({
  title: z.string().min(3),
  tags: z.array(z.string().min(2)),
  author: UserSchema
});
```

---

## Validación con TypeScript estricto
Zod garantiza que el tipo derivado SIEMPRE coincide con el schema.  
Evita inconsistencias entre “validación” y “tipado”.

---

## Integración con formularios (Next.js + Server Actions)
Ejemplo:

```ts
export async function createUser(formData: FormData) {
  const data = {
    email: formData.get("email"),
    age: Number(formData.get("age"))
  };

  const parsed = UserSchema.safeParse(data);
  if (!parsed.success) return { errors: parsed.error.flatten() };

  // usar parsed.data
}
```

---

## Validación asincrónica

```ts
const EmailSchema = z.string().email().refine(async (value) => {
  const exists = await db.user.findUnique({ where: { email: value }});
  return !exists;
}, "Email ya registrado");
```

---

## Super refine (errores personalizados complejos)

```ts
UserSchema.superRefine((val, ctx) => {
  if (val.password !== val.confirmPassword) {
    ctx.addIssue({
      path: ["confirmPassword"],
      message: "Las contraseñas no coinciden."
    });
  }
});
```

---

## Resumen
Zod:
- valida
- tipa
- transforma
- sincroniza la validación con TS
- funciona perfecto con Server Actions, APIs y componentes cliente/servidor

