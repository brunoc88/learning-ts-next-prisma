import express, { Request, Response } from 'express'
import loggerMiddleware from './middlewares/loggerMiddleware'
import usersDB from './db'
import validateUser from './middlewares/validateUser'
import authMiddleware from './middlewares/authMiddleware'

const app = express()

app.use(express.json())
app.use(loggerMiddleware)

app.get('/', (req: Request, res: Response) => {
    res.send('hola')
})

interface UserBody {
    name?: string,
    email?: string
}

interface UserParams {
    id: string // <--- los parametros siempre llegan como string
}

app.get('/users', (req: Request, res: Response) => {
  res.status(200).json(usersDB)
})

app.get('/users/:id', (req: Request<UserParams>, res: Response) => {
  const id = Number(req.params.id)
  const user = usersDB.find(u => u.id === id)
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' })
  res.status(200).json(user)
})

app.post('/users', validateUser, (req: Request<UserBody>, res: Response) => { 
    const data = req.body 
    data.id = usersDB.length + 1 
    usersDB.push(data) 
    res.status(200).json(data) 
})

app.put('/users/:id', (req: Request<UserParams, {}, UserBody>, res: Response) => {
  const id = Number(req.params.id)
  const { name, email } = req.body
  const userIndex = usersDB.findIndex(u => u.id === id)
  if (userIndex === -1) return res.status(404).json({ message: 'Usuario no encontrado' })

  usersDB[userIndex] = { ...usersDB[userIndex], ...(name && { name }), ...(email && { email }) }
  res.status(200).json(usersDB[userIndex])
})

app.delete('/users/:id', (req: Request<UserParams>, res: Response) => {
  const id = Number(req.params.id)
  const index = usersDB.findIndex(u => u.id === id)
  if (index === -1) return res.status(404).json({ message: 'Usuario no encontrado' })
  usersDB.splice(index, 1)
  res.status(200).json(usersDB)
})

app.get('/profile', authMiddleware, (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({ message: 'No autenticado' })
  }

  res.status(200).json({
    message: 'Usuario autenticado',
    user: req.user
  })
})


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Escuchando PUERTO: ${PORT}`)
})



