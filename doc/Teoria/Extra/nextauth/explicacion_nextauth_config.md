# Explicación del Archivo de Configuración de NextAuth (`route.ts`)

Este archivo configura completamente la autenticación de tu aplicación
Next.js usando **NextAuth**, **Google OAuth**, **Credentials Provider**,
y **JWT strategy**.

A continuación está la explicación detallada de cada sección.

------------------------------------------------------------------------

# 1. Importaciones principales

``` ts
import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"
import { prisma } from "@/lib/prisma"
```

### ¿Qué hace cada uno?

-   **NextAuth** → el handler principal de autenticación.
-   **GoogleProvider** → permite iniciar sesión con Google OAuth.
-   **CredentialsProvider** → login con email y contraseña (tu propia
    lógica).
-   **bcrypt** → para comparar el password del usuario con el hash en la
    BD.
-   **prisma** → acceso a la base de datos.

------------------------------------------------------------------------

# 2. Configuración de NextAuth (`authOptions`)

``` ts
export const authOptions: AuthOptions = {
  providers: [ ... ],
  callbacks: { ... },
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
}
```

Este objeto configura:

-   **Providers** → Google + credenciales.
-   **Callbacks** → manipular el JWT y la sesión.
-   **Session Strategy = jwt** → NextAuth guarda todo en un JWT, no en
    BD.
-   **Página de login personalizada** → `/login`.

------------------------------------------------------------------------

# 3. Providers

## 3.1 GoogleProvider

``` ts
GoogleProvider({
  clientId: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
})
```

Esto permite a los usuarios iniciar sesión con su cuenta de Google.

------------------------------------------------------------------------

## 3.2 CredentialsProvider

``` ts
CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: { label: "Email", type: "text" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    ...
  }
})
```

Este provider te permite crear tu propio sistema de login.

### ¿Qué hace `authorize`?

1.  Valida que haya email y contraseña.

2.  Busca el usuario en la BD con Prisma.

3.  Compara la contraseña ingresada con el hash:

    ``` ts
    const isValid = await bcrypt.compare(credentials.password, user.password)
    ```

4.  Si todo está ok → devuelve un objeto `user`.

5.  Si algo falla → devuelve `null`.

Lo que retornás aquí se convierte en **el usuario que NextAuth usará en
el JWT**.

------------------------------------------------------------------------

# 4. Callbacks

Los callbacks permiten modificar: - el **JWT** - la **sesión**

## 4.1 JWT callback

``` ts
async jwt({ token, user }) {
  if (user) {
    token.id = Number(user.id)
    token.rol = user.rol
  }
  return token
}
```

### ¿Qué hace?

-   Cuando el usuario inicia sesión:
    -   copia `id` y `rol` en el token JWT.
-   En llamadas posteriores:
    -   NextAuth reutiliza ese token.

El JWT se convierte en tu **single source of truth**.

------------------------------------------------------------------------

## 4.2 Session callback

``` ts
async session({ session, token }) {
  session.user.id = token.id
  session.user.rol = token.rol
  session.user.email = token.email
  return session
}
```

### ¿Qué hace?

Cada vez que llamás a `useSession()`:

-   Toma los datos del JWT
-   Los inserta en `session.user`
-   Esto es lo que llega al frontend.

Por eso podés hacer:

``` ts
const { data: session } = useSession()
console.log(session.user.rol)
```

------------------------------------------------------------------------

# 5. Strategy: JWT

``` ts
session: { strategy: "jwt" }
```

Esto significa:

-   No se guarda sesión en BD
-   Todo vive dentro del JWT firmado por NextAuth
-   Es rápido, serverless-friendly y simple

------------------------------------------------------------------------

# 6. Páginas personalizadas

``` ts
pages: { signIn: "/login" }
```

NextAuth redirige a `/login` cuando: - el usuario necesita
autenticarse - o no tiene permisos suficientes

------------------------------------------------------------------------

# 7. Export del handler

``` ts
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
```

En el App Router, los endpoints son rutas API.

Esto crea: - `/api/auth/[...nextauth]` → para GET y POST

NextAuth funciona automáticamente a través de estos handlers.

------------------------------------------------------------------------

# 📌 Conclusión

Este archivo:

✔ Configura Google OAuth\
✔ Implementa login por credenciales\
✔ Protege contraseñas con bcrypt\
✔ Usa JWT para manejar toda la sesión\
✔ Inserta `id`, `rol` y `email` en el token\
✔ Expone los datos útiles al frontend vía `session.user`

Es un setup completo, limpio y profesional para NextAuth en Next.js 13+
con App Router.
