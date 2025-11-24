# Día 21 --- Práctica: Autenticación y Autorización en Next.js con NextAuth

## Ejercicio 1 --- Configurar NextAuth básico

1.  Crea `/app/api/auth/[...nextauth]/route.ts`
2.  Agrega un provider OAuth como Google
3.  Prueba el inicio de sesión

### Objetivo

Que puedas iniciar sesión y obtener `session.user`.

------------------------------------------------------------------------

## Ejercicio 2 --- Agregar Credentials Provider

1.  Implementar un login con email/password.
2.  Verificar usuario en DB (fake o real).
3.  Retornar el objeto usuario.

### Objetivo

Comprender el flujo `authorize()`.

------------------------------------------------------------------------

## Ejercicio 3 --- Tipar la sesión

1.  Extiende NextAuth para agregar:
    -   id
    -   role
2.  Actualiza los callbacks para almacenar role en el JWT y session.

### Objetivo

Que `session.user.role` sea accesible en server/client.

------------------------------------------------------------------------

## Ejercicio 4 --- Proteger una página server-side

1.  Crea página `/admin`
2.  Verifica sesión con `getServerSession()`
3.  Redirige si no hay sesión o si no es admin

------------------------------------------------------------------------

## Ejercicio 5 --- Proteger una API

1.  Crea `/app/api/admin/stats/route.ts`
2.  Solo admins pueden acceder

------------------------------------------------------------------------

## Ejercicio 6 --- Autorización fina

1.  Crea un middleware que:
    -   permita `/dashboard` a usuarios logueados
    -   permita `/admin` solo a admins

------------------------------------------------------------------------

## Ejercicio 7 --- Mostrar datos del usuario

1.  En una Client Component usa `useSession()`
2.  Muestra email y rol

------------------------------------------------------------------------

## Bonus (difícil)

Implementar refresh token rotation mediante callbacks personalizados.

------------------------------------------------------------------------

## Resultado esperado

Después de estos ejercicios deberías tener: ✔ Login con OAuth y
Credentials\
✔ Sesión tipada\
✔ Rutas protegidas server/client\
✔ APIs protegidas\
✔ Autorización según roles
