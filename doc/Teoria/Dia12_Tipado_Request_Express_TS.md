# Tipado de Request en Express con TypeScript

## 🧩 Estructura general de `Request`

``` ts
Request<Params = {}, ResBody = any, ReqBody = any, ReqQuery = ParsedQs>
```

### Parámetros genéricos

  ----------------------------------------------------------------------------------------
  Posición              Qué representa                 Ejemplo
  --------------------- ------------------------------ -----------------------------------
  **1️⃣**                `Params` → parámetros de ruta  `{ id: string }`
                        (`req.params`)                 

  **2️⃣**                `ResBody` → tipo de respuesta  `{ message: string }`
                        (`res.json()`)                 

  **3️⃣**                `ReqBody` → tipo del body      `{ name: string; email: string }`
                        (`req.body`)                   

  **4️⃣**                `ReqQuery` → tipo de query     `{ page: number }`
                        string (`req.query`)           
  ----------------------------------------------------------------------------------------

------------------------------------------------------------------------

## 🧠 Cuándo tipar cada parte

  --------------------------------------------------------------------------------
  Parte de `Request`    Dónde se usa más   Ejemplo            Tipado recomendado
  --------------------- ------------------ ------------------ --------------------
  `Params`              GET, PUT, DELETE   `/users/:id`       ✅ casi siempre
  (`req.params`)                                              

  `ReqBody`             POST, PUT, PATCH   crear/actualizar   ✅ casi siempre
  (`req.body`)                             datos              

  `ReqQuery`            GET (filtros,      `/users?page=2`    ✅ a veces
  (`req.query`)         paginación)                           

  `ResBody`             Casi nunca se tipa                    ❌ casi nunca
  (`res.json()`)        (opcional)                            
  --------------------------------------------------------------------------------

------------------------------------------------------------------------

## 🔹 Ejemplos por tipo de solicitud

### 🟢 GET (solo `params` o `query`)

``` ts
interface UserParams { id: string }

app.get('/users/:id', (req: Request<UserParams>, res: Response) => {
  const { id } = req.params
})
```

Con query strings:

``` ts
interface UserQuery { page?: string }

app.get('/users', (req: Request<{}, {}, {}, UserQuery>, res: Response) => {
  const { page } = req.query
})
```

------------------------------------------------------------------------

### 🟡 POST (tiene body)

``` ts
interface UserBody { name: string; email: string }

app.post('/users', (req: Request<{}, {}, UserBody>, res: Response) => {
  const { name, email } = req.body
})
```

------------------------------------------------------------------------

### 🟠 PUT o PATCH (params + body)

``` ts
interface UserParams { id: string }
interface UserBody { name?: string; email?: string }

app.put('/users/:id', (req: Request<UserParams, {}, UserBody>, res: Response) => {
  const { id } = req.params
  const { name, email } = req.body
})
```

------------------------------------------------------------------------

### 🔴 DELETE (solo params)

``` ts
interface UserParams { id: string }

app.delete('/users/:id', (req: Request<UserParams>, res: Response) => {
  const { id } = req.params
})
```

------------------------------------------------------------------------

## ✅ Resumen final

  --------------------------------------------------------------------------
  Método          Usa body        Tipado típico de `Request`
  --------------- --------------- ------------------------------------------
  **GET**         ❌              `Request<UserParams>` o
                                  `Request<{}, {}, {}, UserQuery>`

  **POST**        ✅              `Request<{}, {}, UserBody>`

  **PUT/PATCH**   ✅              `Request<UserParams, {}, UserBody>`

  **DELETE**      ❌              `Request<UserParams>`
  --------------------------------------------------------------------------

------------------------------------------------------------------------

### 💡 Tip extra

Si querés simplificar, podés crear tipos auxiliares:

``` ts
type RequestWithBody<T> = Request<{}, {}, T>;
type RequestWithParams<T> = Request<T>;
```

Así podés usar:

``` ts
(req: RequestWithBody<UserBody>, res: Response)
(req: RequestWithParams<UserParams>, res: Response)
```
