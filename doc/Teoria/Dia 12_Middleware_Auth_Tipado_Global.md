# Middleware de Autenticación y Tipado Global en Express con TypeScript

## 🧩 Objetivo

Crear un middleware `authMiddleware` que agregue
`req.user = { id: string, role: string }`\
y extender el tipo `Request` globalmente para que TypeScript lo
reconozca en toda la app.

------------------------------------------------------------------------

## ✅ Middleware completo

``` ts
import { Request, Response, NextFunction } from 'express'

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; role: string }
    }
  }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  req.user = { id: '123', role: 'admin' }
  next()
}

export default authMiddleware
```

------------------------------------------------------------------------

## 🧠 Explicación de los conceptos clave

### 🔹 `declare global`

Permite modificar los **tipos globales** de TypeScript.\
En este caso, sirve para que cualquier archivo del proyecto reconozca
`req.user`.

### 🔹 `namespace Express`

Los tipos de Express están definidos dentro de un *namespace* llamado
`Express`.\
Al entrar en ese espacio, podemos modificar (fusionar) sus interfaces.

### 🔹 `interface Request`

Express ya tiene una interfaz `Request`.\
Cuando declaramos otra interfaz `Request` dentro del mismo `namespace`,
**TypeScript las fusiona**.\
Esto se llama **Declaration Merging**.

### 🔹 Resultado

Ahora, cada vez que uses `req` en tu app, TypeScript sabrá que puede
tener una propiedad opcional `user`:

``` ts
req.user?.id      // string
req.user?.role    // string
```

------------------------------------------------------------------------

## ⚙️ Uso en una ruta `/profile`

``` ts
import express, { Request, Response } from 'express'
import authMiddleware from './middlewares/authMiddleware'

const app = express()

app.get('/profile', authMiddleware, (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: 'No autenticado' })
  }

  res.status(200).json({
    message: 'Usuario autenticado',
    user: req.user
  })
})
```

### 📤 Respuesta esperada

``` json
{
  "message": "Usuario autenticado",
  "user": { "id": "123", "role": "admin" }
}
```

------------------------------------------------------------------------

## ✅ Resumen final

  -----------------------------------------------------------------------
  Concepto                            Qué hace
  ----------------------------------- -----------------------------------
  `declare global`                    Extiende tipos a nivel global

  `namespace Express`                 Ingresa al espacio de tipos de
                                      Express

  `interface Request`                 Se fusiona con la existente
                                      (declaration merging)

  `req.user`                          Propiedad reconocida globalmente
                                      como `{ id: string; role: string }`
  -----------------------------------------------------------------------

------------------------------------------------------------------------

### 💡 En síntesis

> No creamos una nueva interfaz, **fusionamos la existente** para
> extenderla.\
> Así, cualquier middleware o ruta puede usar `req.user` con tipado
> seguro.
