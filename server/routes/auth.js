import { Router } from 'express'
import { createUser } from '../controllers/auth.js'

export const authRouter = Router()

authRouter.post('/api/signup', createUser)
