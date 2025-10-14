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