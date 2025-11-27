
# Credentials Provider — Teoría Completa

## 🧩 ¿Qué es el Credentials Provider?
El **Credentials Provider** de NextAuth permite autenticar usuarios usando un mecanismo clásico: **email + contraseña**.
A diferencia de los OAuth Providers, aquí vos controlás completamente:

- Cómo obtenés el usuario  
- Cómo verificás la contraseña  
- Qué retornás como objeto usuario  
- Qué pasa si las credenciales son incorrectas  

Ideal para apps con base de datos propia.

---

## 📌 ¿Cómo funciona el flujo del Credentials Provider?

### 1. El usuario envía credenciales
Cuando ejecutás:

```ts
signIn("credentials", { email, password })
```

NextAuth envía esos datos a la función `authorize()`.

---

### 2. NextAuth llama a `authorize(credentials)`
Ejemplo típico:

```ts
authorize: async (credentials) => {
  const user = await prisma.user.findUnique({ where: { email: credentials.email } })
  if (!user) return null

  const isValid = await bcrypt.compare(credentials.password, user.password)
  if (!isValid) return null

  return user
}
```

👉 Si retornás un usuario → Login exitoso  
👉 Si retornás `null` → Error: CredentialsSignin  

---

## 🔍 ¿Qué es `credentials: {}` del Provider?

```ts
credentials: {
  email: { label: "Email", type: "text" },
  password: { label: "Password", type: "password" }
}
```

Sirve para que **NextAuth genere automáticamente un formulario**.

### Se usa cuando:
✔️ No tenés tu propio formulario  
❌ Si ya tenés un `<form>` propio, **esto no afecta nada**

Ejemplo de vista automática:
- `/api/auth/signin`

**En tu caso, como usás un formulario propio, este bloque es opcional.**

---

## 🚀 ¿Qué es `callbackUrl`?

Cuando hacés login:

```ts
await signIn("credentials", {
  email,
  password,
  callbackUrl: "/"
})
```

`callbackUrl` es **la ruta a donde NextAuth redirige tras un login exitoso**.

Ejemplos:
- `/` → Home  
- `/dashboard` → Panel  
- `/profile` → Perfil del usuario  

Si no se pasa, NextAuth usa su comportamiento por defecto.

---

## 📦 Resumen general

| Concepto | Explicación |
|---------|-------------|
| Credentials Provider | Login tradicional con email + password |
| `authorize()` | Donde validás credenciales y retornás el usuario |
| Retornar `null` | Significa credenciales inválidas |
| `credentials: {}` | Solo para formularios automáticos |
| `signIn()` | Ejecuta el login desde el frontend |
| `callbackUrl` | Redirección post-login |

---

## 🏁 Conclusión final
El Credentials Provider te da **control completo** sobre tu sistema de autenticación.  
Lo más importante es entender que:

- `authorize()` contiene toda la lógica crítica  
- `credentials: {}` es solo para formularios autogenerados  
- `signIn()` dispara el login  
- `callbackUrl` controla la navegación post-login  

Ahora dominás completamente el flujo del Credentials Provider en NextAuth.
