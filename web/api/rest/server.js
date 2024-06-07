import { UserRouter } from "./routes/user.js"
import { CheckRouter } from "./routes/check.js"

export const apiRestConnection = (app) => {

	app.use('/check', CheckRouter)
	app.use('/user', UserRouter)

}