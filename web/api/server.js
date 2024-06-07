import express from 'express'
import cors from 'cors'
import { createServer } from 'node:http'
import { webSocketConnection } from './websocket/server.js'

const app = express()
const server = createServer(app)
webSocketConnection(server)

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
	res.send('ok')
})

app.post('/newUser', (req, res) => {
	res.send('ok')
})

const PORT = process.env.PORT ?? 3080
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
