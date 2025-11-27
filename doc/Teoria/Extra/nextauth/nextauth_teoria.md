# Explicación completa de tu configuración de NextAuth con Google

## 1. Archivo `/app/api/auth/[...nextauth]/route.ts`

``` ts
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ]
})

export { handler as GET, handler as POST }
```

### ¿Qué hace cada parte?

### `NextAuth()`

Es la función principal que inicializa NextAuth. Recibe un objeto de
configuración donde definís:

-   providers\
-   callbacks\
-   pages personalizadas\
-   eventos\
-   etc.

### `providers: []`

Lista de servicios mediante los cuales el usuario puede autenticarse.\
En tu caso: Google OAuth.

### `GoogleProvider({...})`

Configura el provider de Google.

#### `clientId` y `clientSecret`

Valores que te da Google Cloud Console al crear las credenciales OAuth.\
Se guardan en variables de entorno para que:

-   no queden expuestas en el código\
-   puedas cambiarlas por entorno (producción / testing)

### `handler as GET` y `handler as POST`

NextAuth necesita manejar ambas solicitudes:

-   **GET** → muestra la UI de login/logout, callback, etc.\
-   **POST** → maneja las acciones internas como cerrar sesión.

NextAuth por dentro usa ambos métodos, por eso se exportan.

------------------------------------------------------------------------

## 2. `/app/provider.tsx` --- Envolver la app con SessionProvider

``` tsx
"use client"

import { SessionProvider } from "next-auth/react"

const Provider = ({children}:{children:React.ReactNode}) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default Provider
```

### ¿Qué hace?

`SessionProvider` coloca en un **contexto global** la sesión del usuario
en el lado del cliente.

Esto permite que `useSession()` funcione en cualquier componente client.

### ¿Por qué `"use client"`?

Porque el SessionProvider vive del lado del cliente; el contexto no
puede existir en un Server Component.

------------------------------------------------------------------------

## 3. Navbar con signIn, signOut y useSession

``` tsx
"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

const Navbar = () => {
    const { data: session } = useSession()

    return (
        <nav>
            {session?.user ? (
                <div>
                    <p>{session?.user?.email}</p>
                    <button onClick={() => signOut()}>LogOut</button>
                </div>

            ) : (
                <>  
                    <button onClick={() => signIn()}>SingIn</button>
                </>

            )}
        </nav>
    )
}
```

### `useSession()`

Hook que:

-   lee la sesión enviada por NextAuth\
-   la sincroniza en tiempo real

Si el usuario está logueado → devuelve `{ user, expires }`.

### `signIn()` y `signOut()`

Funciones creadas por NextAuth:

-   `signIn()` redirige al login del provider.\
-   `signOut()` elimina la cookie de sesión.

------------------------------------------------------------------------

## 4. El layout envolviendo todo

``` tsx
<Provider>
  <Navbar />
  {children}
</Provider>
```

Hace posible que:

-   Navbar acceda a `useSession()`.
-   Toda la app conozca la sesión del usuario.

------------------------------------------------------------------------

## 5. Variables de entorno

    GOOGLE_CLIENT_ID=...
    GOOGLE_CLIENT_SECRET=...
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=supersecretogenerado

### `NEXTAUTH_URL`

Url base del proyecto. Es necesaria para que Google pueda devolver el
callback correctamente.

### `NEXTAUTH_SECRET`

Clave criptográfica usada para firmar cookies JSON Web Tokens (cuando
usás estrategia "jwt").

------------------------------------------------------------------------

# En resumen

Tu implementación está:

✔ Correcta\
✔ Tipica para proyectos Next + NextAuth\
✔ Bien estructurada

Ya tenés autenticación con Google 100% funcional.
