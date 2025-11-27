# Refresh Token Rotation en NextAuth + Prisma

## 1. ¿Qué es Refresh Token Rotation?

Refresh Token Rotation es una técnica de seguridad donde: - Cada vez que
se usa un *refresh token* para obtener un nuevo *access token*... - Se
genera un **nuevo refresh token**. - El antiguo queda invalidado
automáticamente.

Esto evita ataques donde alguien roba un refresh token y lo reutiliza
indefinidamente.

------------------------------------------------------------------------

## 2. ¿Por qué NextAuth lo necesita?

NextAuth **no maneja refresh tokens automáticamente** en OAuth (Google,
GitHub, etc.)\
Por defecto solo usa un JWT interno.

Cuando el access token de Google expira: - tu app deja de poder llamar a
Google APIs - NextAuth no lo renueva solo - No guarda el refresh_token
si no usás Prisma Adapter

Por eso implementamos: - Persistencia del refresh token en la tabla
**Account** - Rotación automática al expirar el access token - Lógica
personalizada con callbacks

------------------------------------------------------------------------

## 3. Componentes necesarios

### ✔ Prisma Adapter

Permite que NextAuth guarde: - access_token - refresh_token -
expires_at - providerAccountId

### ✔ Modelo Account en Prisma

``` prisma
model Account {
  id                Int     @id @default(autoincrement())
  userId            Int
  type              String
  provider          String
  providerAccountId String
  access_token      String?
  refresh_token     String?
  expires_at        Int?
  token_type        String?
  scope             String?

  user User @relation(fields: [userId], references: [id])

  @@unique([provider, providerAccountId])
}
```

------------------------------------------------------------------------

## 4. Flujo completo de Refresh Token Rotation

### 1) Login inicial con Google

NextAuth recibe: - access_token - refresh_token - expires_at

Se guardan en DB y en el JWT.

### 2) Cliente usa `session.accessToken`

Cuando expira, NextAuth detecta que:

    Date.now() > token.accessTokenExpires

### 3) NextAuth llama a `refreshAccessToken()`

Esta función: - Llama al endpoint de Google para intercambiar el refresh
token - Recibe un nuevo **access_token** - Recibe un nuevo
**refresh_token** (rotado) - Actualiza en DB la tabla **Account**

### 4) Nuevo token se devuelve al JWT

La sesión queda renovada sin que el usuario se loguee de nuevo.

------------------------------------------------------------------------

## 5. Función refreshAccessToken()

``` ts
async function refreshAccessToken(token) {
  try {
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        refresh_token: token.refreshToken,
        grant_type: "refresh_token",
      }),
    });

    const refreshed = await response.json();
    if (!response.ok) throw refreshed;

    return {
      ...token,
      accessToken: refreshed.access_token,
      accessTokenExpires: Date.now() + refreshed.expires_in * 1000,
      refreshToken: refreshed.refresh_token ?? token.refreshToken,
    };
  } catch (e) {
    return { ...token, error: "RefreshAccessTokenError" };
  }
}
```

------------------------------------------------------------------------

## 6. Lógica de NextAuth

### JWT callback

-   Guarda tokens al loguear
-   Verifica expiración
-   Refresca si es necesario

### Session callback

-   Expone accessToken a la app

------------------------------------------------------------------------

## 7. Ventajas de Refresh Token Rotation

✔ El refresh token se renueva cada vez\
✔ Si alguien roba un refresh viejo → queda inútil\
✔ Menos riesgo de ataques mediante token reuse\
✔ Sesiones más largas sin re-login automático\
✔ Mejor integración con Google APIs protegidas

------------------------------------------------------------------------

## 8. Cuándo lo necesitás realmente

Lo necesitás **solo** si vas a usar Google APIs privadas, por ejemplo: -
Gmail API - Calendar API - Drive API - YouTube API

Si solo usás Google para login, no es obligatorio, pero igual mejora la
seguridad.

------------------------------------------------------------------------

## 9. Conclusión

Refresh Token Rotation añade: - seguridad sólida - sesiones más
estables - renovación automática - control de expiración avanzada

Es el enfoque profesional para manejar OAuth en Next.js + NextAuth +
Prisma.
