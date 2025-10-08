# Día 12: TypeScript en Node.js y Express

## 1. Tipado de objetos `req`, `res` y `next`

En una aplicación Express con TypeScript, es importante tipar correctamente los objetos `Request`, `Response` y `NextFunction`.

```ts
import { Request, Response, NextFunction } from 'express';

const ejemplo = (req: Request, res: Response, next: NextFunction) => {
  res.send('Hola TypeScript + Express');
};
```

### Tipar parámetros, query y body

```ts
import { Request, Response } from 'express';

interface UserParams {
  id: string;
}

interface UserBody {
  name: string;
  age: number;
}

const updateUser = (req: Request<UserParams, {}, UserBody>, res: Response) => {
  const { id } = req.params;
  const { name, age } = req.body;
  res.json({ id, name, age });
};
```

## 2. Crear middlewares tipados

Los middlewares en TypeScript también pueden recibir tipado estricto:

```ts
import { Request, Response, NextFunction } from 'express';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
};

export default loggerMiddleware;
```

También se pueden tipar middlewares personalizados que agregan propiedades a `req`:

```ts
declare global {
  namespace Express {
    interface Request {
      user?: { id: string; role: string };
    }
  }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  req.user = { id: '123', role: 'admin' };
  next();
};
```

## 3. API REST con Express + TS

Estructura básica de un proyecto:

```
src/
 ├── index.ts
 ├── routes/
 │    └── user.routes.ts
 ├── middlewares/
 │    └── logger.ts
 └── controllers/
      └── user.controller.ts
```

Ejemplo de endpoint tipado:

```ts
import express, { Request, Response } from 'express';
const app = express();
app.use(express.json());

app.get('/users/:id', (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  res.json({ id, name: 'Usuario Ejemplo' });
});

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));
```
