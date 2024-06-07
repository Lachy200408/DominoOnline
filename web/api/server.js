import express from 'express'
import { createServer } from 'node:http'
import { middlewares } from './middlewares/middlewares.js'
import { webSocketConnection } from './websocket/server.js'
import { apiRestConnection } from './rest/server.js'

const app = express()
const server = createServer(app)

middlewares(app)

//* Server connections 
webSocketConnection(server)
apiRestConnection(app)

const PORT = process.env.PORT ?? 3080
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
