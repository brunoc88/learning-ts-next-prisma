# Día 21 --- Autenticación y Autorización en Next.js con NextAuth

## 1. ¿Qué es NextAuth?

NextAuth es una librería para Next.js que facilita la autenticación
usando múltiples providers (Credentials, Google, GitHub, etc.) con
configuración mínima y soporte completo para server components.

## 2. Flujo básico de NextAuth

1.  El usuario inicia sesión mediante un provider.
2.  NextAuth crea una sesión y la guarda (JWT o DB).
3.  El frontend accede a `getServerSession()` o `useSession()` para
    saber si el usuario está logueado.
4.  Se protege rutas y APIs según los roles del usuario.

## 3. Providers

### Credentials Provider

Permite login con email/password usando tu propia DB.

### OAuth Providers

Google, GitHub, Discord, Facebook, etc.

Se agregan mediante un array en `auth.ts`:

``` ts
providers: [
  GoogleProvider({ clientId: "...", clientSecret: "..." }),
]
```

## 4. Tipar la sesión y el usuario

NextAuth permite extender los tipos base para: - agregar campos al JWT -
agregar campos al User - tipar `session.user`

Ejemplo:

``` ts
declare module "next-auth" {
  interface User {
    role: string;
  }

  interface Session {
    user: {
      id: string;
      role: string;
      email: string;
    };
  }
}
```

## 5. Protección de rutas

### Server Components

Usar `getServerSession()`:

``` ts
const session = await getServerSession(authOptions);
if (!session) redirect("/login");
```

### Client Components

Usar `useSession()`:

``` ts
const { data: session } = useSession();
```

## 6. Protección de APIs (Route Handlers)

``` ts
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return new Response("Unauthorized", { status: 401 });
}
```

## 7. Autorización (roles/permisos)

Puedes extender el JWT o la sesión para incluir un rol:

``` ts
callbacks: {
  jwt({ token, user }) {
    if (user) token.role = user.role;
    return token;
  },
  session({ session, token }) {
    session.user.role = token.role;
    return session;
  }
}
```

### Ejemplo simple:

``` ts
if (session.user.role !== "admin") {
  return new Response("Forbidden", { status: 403 });
}
```

------------------------------------------------------------------------

## Resumen

-   NextAuth resuelve la autenticación en Next.js.
-   Se pueden usar múltiples providers.
-   La sesión y el usuario se pueden tipar.
-   Puedes proteger rutas server/client y APIs.
-   Se implementa autorización según roles.
