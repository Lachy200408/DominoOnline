import { Router } from "express"
import { UserController } from "../controller/user.js"
import { handleImage } from '../../middlewares/image.middleware.js'

export const UserRouter = new Router()

UserRouter.post('/new', handleImage, UserController.signUp)
UserRouter.get('/', UserController.signIn)
UserRouter.get('/avatar/:avatar', UserController.getAvatar)
