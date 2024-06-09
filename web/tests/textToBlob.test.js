import express from "express"
import fs from 'node:fs/promises'

const app = express()

app.post('/', (req, res) => {
	let buffer = ''

	req.on('data', chunk => {
		buffer += chunk
	})

	req.on('end', async () => {
		buffer = JSON.parse(buffer)
		buffer = Object.values(buffer)
		buffer = Buffer.from(buffer)

		await fs.writeFile('./copia.png', buffer)
	})

	res.send()
})

app.listen(3000, ()=>{
	console.log('Running');
})