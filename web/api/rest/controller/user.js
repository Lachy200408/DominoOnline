import { UserModel } from "../models/mysql/user.js"

export class UserController {
	static async signUp (req, res) {
		const { username, password } = req.body

		if (await UserModel.exists({ username })) return res.status(404).json({ message: 'The user already exists.' })
		
		if (await UserModel.insert({ username, password })) {
			const result = await UserModel.select({ username, password })
			
			if (result) return res.json(result)
		}

		return res.status(404).send()
	}

	static async signIn (req, res) {
		const { username, password } = req.query

		if (await UserModel.exists({ username })) {
			const result = await UserModel.select({ username, password })
			
			if (result) return res.json(result)
			return res.status(404).json({ message: 'Incorrect password.' })
		}

		return res.status(404).json({ message: 'Incorrect username.' })
	}
}