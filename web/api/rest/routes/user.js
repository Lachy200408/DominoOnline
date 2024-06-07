import { Router } from "express"
import { UserController } from "../controller/user.js"

export const UserRouter = new Router()

UserRouter.post('/new', UserController.signUp)