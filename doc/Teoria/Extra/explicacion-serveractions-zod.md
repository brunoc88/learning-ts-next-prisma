# Server Actions, onSubmit y Zod --- Explicación Completa

## 1. ¿Por qué `handle` es async aunque no use base de datos?

Las Server Actions en Next.js están diseñadas para poder realizar
operaciones asincrónicas como:

-   Validaciones
-   Llamadas a APIs
-   Consultas a bases de datos
-   Manejo de sesiones
-   Redirecciones

Aunque no uses base de datos, **Next.js recomienda que las Server
Actions sean async** porque así están diseñadas en el framework.

------------------------------------------------------------------------

## 2. ¿Por qué `"use server"` va dentro de la función?

Existen dos formas de usar `"use server"`:

### A) Arriba del archivo

Convierte **todo el archivo** en un Server Component.

### B) Dentro de una función

Convierte **solo esa función** en una Server Action.

En tu caso, solo querés que la función se ejecute en el servidor, no
todo el archivo. Por eso:

``` ts
async function handle(formData: FormData) {
  "use server";
}
```

------------------------------------------------------------------------

## 3. ¿Cuándo usar `action={handle}` y cuándo usar `onSubmit`?

### ✔ Usar `<form action={handle}>` (Server Action)

Se ejecuta **en el servidor**.

Ideal para: - Validar datos con Zod - Login / Register - CRUD con
Prisma - Redirecciones - Cookies / sesiones - Seguridad (no expone
lógica al cliente)

No usa eventos de React.

------------------------------------------------------------------------

### ✔ Usar `onSubmit={(e) => ...}` (Cliente)

Se ejecuta **en el navegador**.

Ideal para: - Validación inmediata en la UI - Formularios SPA - Estados
(`useState`) - Evitar recarga de página - Interactividad compleja

Usa `React.FormEvent`.

``` ts
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
}
```

------------------------------------------------------------------------

## 4. ¿Cuándo usar `React.FormEvent`?

Solo cuando usás eventos de React en un Client Component:

``` ts
<form onSubmit={handleSubmit}>
```

No se usa en Server Actions.

------------------------------------------------------------------------

## 5. Resumen Final

### 🟦 Server Actions (`action={handle}`)

-   Se ejecutan en el servidor
-   Necesitan `"use server"`
-   No usan eventos de React
-   Ideales para lógica sensible o backend

### 🟧 onSubmit

-   Se ejecuta en el cliente
-   Necesita `"use client"`
-   Usan `React.FormEvent`
-   Ideales para UX y validaciones instantáneas

------------------------------------------------------------------------

## 6. Reglas rápidas

  Si quieres...                             Usar
  ----------------------------------------- ----------
  Validar con Zod en backend                action
  Login / Registro                          action
  Alta seguridad                            action
  Mostrar errores en pantalla al instante   onSubmit
  Manejar estados del formulario            onSubmit
  Hacer el formulario "SPA"                 onSubmit

------------------------------------------------------------------------

Si necesitás, puedo hacerte otro MD con ejemplos completos de ambos
enfoques.
