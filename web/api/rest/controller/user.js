import { UserModel } from "../models/mysql/user.js"

export class UserController {
	static async signUp (req, res) {
		const username = req.body['username'],
					password = req.body['password']

		const result = await UserModel.signUp({ username, password })

		if (result) return res.send(result)
		return res.status(404).send()
	}
}