import { UserModel } from "../models/mysql/user.js"

export class UserController {
	static async signUp (req, res) {
		const { username, avatarName } = req.query
		
		if (await UserModel.exists({ username })) {
			return res.status(404).json({ message: 'The user already exists.' })
		}
		
		if (await UserModel.insert({ username, avatarName })) {
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

	static async getAvatar (req, res) {
		const { avatar } = req.params

		res.sendFile(process.cwd() + `/web/api/avatars/${avatar}`)
	}
}