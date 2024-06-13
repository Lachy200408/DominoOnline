import { writeFile } from 'node:fs/promises'

export const handleImage = (req, res, next) => {
	const { avatarName } = req.query

	if (req.body) {
		//* Tomar y guardar la imagen
		let body = []
		req.on('data', chunk => {
			body.push(...Int8Array.from(chunk))
		})

		req.on('end', async () => {
			const buffer = Buffer.from(body)
			await writeFile(`./web/api/avatars/${avatarName}`, buffer)
		})
	}

	next()
}