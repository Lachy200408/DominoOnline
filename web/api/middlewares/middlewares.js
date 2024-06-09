import cors from 'cors'
import { json, text } from "express"

export const middlewares = function (app) {
	app.use(cors({methods: '*'}))
	app.use(json())
	app.use(text())
}