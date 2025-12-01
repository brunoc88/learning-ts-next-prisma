# `useActionState` en React 19

## ¿Qué es `useActionState`?

`useActionState` es un hook introducido en React 19 que reemplaza a
`useFormState` y forma parte del nuevo sistema de **Server Actions**.

Sirve para manejar: - El **estado** que retorna una Server Action. -
Errores de validación. - Estados de carga o resultado de un form sin
necesidad de `useState`.

Es una forma más moderna y declarativa de conectar un formulario HTML
con una Server Action, manteniendo el estado sincronizado.

------------------------------------------------------------------------

## ¿Cómo funciona?

``` tsx
const [state, actionFn] = useActionState(serverAction, initialState)
```

### Parámetros:

1.  **serverAction** → la función async marcada con `"use server"`.
2.  **initialState** → un valor inicial para el estado (por ejemplo
    `{ errors: {} }`).

### Retorna:

-   **state** → el estado actual retornado por la server action.
-   **actionFn** → la función que se usa como `action={actionFn}` dentro
    del formulario.

------------------------------------------------------------------------

## Ejemplo básico

### 1. Server Action (valida email y password)

``` ts
"use server"
import LoginSchema from "@/schema/loginSchema"

export async function loginAction(prevState, formData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password")
  }

  const parsed = LoginSchema.safeParse(data)

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors
    }
  }

  return { success: true, errors: {} }
}
```

------------------------------------------------------------------------

### 2. Client Component usando `useActionState`

``` tsx
"use client"

import { useActionState } from "react"
import { loginAction } from "./actions"

export default function LoginPage() {
  const [state, formAction] = useActionState(loginAction, { errors: {} })

  return (
    <form action={formAction}>
      <input type="email" name="email" />
      {state.errors?.email && <p>{state.errors.email}</p>}

      <input type="password" name="password" />
      {state.errors?.password && <p>{state.errors.password}</p>}

      <button>Enviar</button>
    </form>
  )
}
```

------------------------------------------------------------------------

## ¿Por qué es importante?

-   Hace que los formularios funcionen **similar a la Web clásica**,
    pero con la potencia de React.
-   Se integra automáticamente con Server Actions.
-   Permite manejar errores y estados sin `useState`.
-   Es más simple que manejar fetch, states, refetch, loaders, etc.

------------------------------------------------------------------------

## Cuándo usar `useActionState`

  Situación                                     ¿Usar `useActionState`?
  --------------------------------------------- -------------------------
  Validación en server action                   ✔ Sí
  Formularios simples sin client JS extra       ✔ Sí
  Formularios complejos controlados (con RHF)   ❌ No
  Lógica del form en el cliente                 ❌ No

------------------------------------------------------------------------

## Resumen

`useActionState` es:

-   El reemplazo de `useFormState`.
-   El hook oficial de React para usar **Server Actions** en
    formularios.
-   Ideal para validaciones con Zod en el backend.
-   Muy simple de implementar.

Es la forma recomendada para Next.js App Router + Server Actions +
Formularios HTML.
