import express from 'express'
import { createServer } from 'node:http'
import { webSocketConnection } from './websocket/server.js'

const app = express()
const server = createServer(app)
webSocketConnection(server)

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/web/api/prueba.html')
})

const PORT = process.env.PORT ?? 3080
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
