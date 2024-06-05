import net from "node:net"

const server = new net.Server(/* Aqui va la conexion */)

const PORT = process.env.PORT ?? 3080
server.listen(PORT, 'localhost', () => {
	console.log(`Server is running on port: ${PORT}`)
})