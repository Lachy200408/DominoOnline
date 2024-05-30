import net from "node:net"
import { Handlers } from "./handlers.mjs"

const server = new net.Server(Handlers.connection)

const PORT = process.env.PORT ?? 3080
server.listen(PORT, 'localhost', () => {
	console.log(`Server is running on port: ${PORT}`)
})