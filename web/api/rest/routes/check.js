import { Router } from "express"
import { CheckController } from "../controller/check.js"

export const CheckRouter = new Router()

CheckRouter.get('/', CheckController.primary)