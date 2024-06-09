import { AvatarModel } from "../util/avatar.js"
import { UserModel } from "../models/mysql/user.js"

export class UserController {
	static async postAvatar (req, res) {
		const { type } = req.query
		const total = +req.query.total
		const text = req.body

		if (AvatarModel.ready()) AvatarModel.init(total)
		AvatarModel.push(text)

		if (AvatarModel.completed()) {
			
		}
		return res.send('next')
	}

	static async signUp (req, res) {
		const { username } = req.query

		if (await UserModel.exists({ username })) {
			return res.status(404).json({ message: 'The user already exists.' })
		}
		
		if (await UserModel.insert({ username, avatar })) {
			const result = await UserModel.select({ username })
			
			if (result) return res.json(result)
		}

		return res.status(404).json({ message: 'Database error.' })
	}

	static async signIn (req, res) {
		const { username } = req.query

		const result = await UserModel.select({ username })
			
		if (result) return res.json(result)
		return res.status(404).json({ message: 'Incorrect username.' })
	}
}