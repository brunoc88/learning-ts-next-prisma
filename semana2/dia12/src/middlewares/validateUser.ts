import { Request, Response, NextFunction } from 'express'
import { User } from '../types/User'  // o UserBody si lo tenés separado



const validateUser = (req: Request<{}, {}, User>, res: Response, next:NextFunction) => {
    const {name, email} = req.body
    if(!name || !email) return res.status(400).json('Datos incompletos!')
    next()
}

export default validateUser