# Día 12: Ejercicios prácticos con Express y TypeScript

## 🧩 Ejercicio 1: Middleware de logger
Crea un middleware llamado `loggerMiddleware` que imprima en consola el método y la URL de cada petición.

**Objetivo:** practicar `NextFunction` y middleware global.

---

## 🧩 Ejercicio 2: Tipado de parámetros y cuerpo
Crea una ruta `POST /users/:id` que reciba un parámetro `id` y un body con `{ name: string, email: string }`.

**Requisitos:**
- Tipar correctamente `req.params` y `req.body`.
- Responder con un JSON que combine ambos.

---

## 🧩 Ejercicio 3: Middleware de autenticación
Crea un middleware `authMiddleware` que agregue `req.user = { id: string, role: string }`.

**Requisitos:**
- Usa `declare global` para extender la interfaz `Request`.
- En la ruta `/profile`, devuelve el usuario autenticado.

---

## 🧩 Ejercicio 4: CRUD tipado
Crea un CRUD básico de usuarios:
- `GET /users`
- `GET /users/:id`
- `POST /users`
- `PUT /users/:id`
- `DELETE /users/:id`

**Pistas:**
- Usa un array como base de datos temporal.
- Crea una interfaz `User`.
- Tipá todas las rutas.

---

## 🧩 Extra: Validaciones con tipado
Implementa un middleware `validateUser` que valide los campos del body (`name`, `email`) y devuelva un error si faltan datos.

---

💡 **Consejo:** Usa `ts-node-dev` o `nodemon` con `ts-node` para desarrollo rápido.

Ejemplo de script en `package.json`:
```json
"scripts": {
  "dev": "ts-node-dev --respawn src/index.ts"
}
```

---

✅ **Objetivo del día:** dominar el tipado en Express para crear APIs seguras y mantenibles.
