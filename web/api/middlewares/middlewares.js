import cors from 'cors'
import { json } from "express"

export const middlewares = function (app) {
	app.use(cors())
	app.use(json())
}