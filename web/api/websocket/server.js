import { Server } from 'socket.io'
import { SocketCore } from './controller/core.js'

export const webSocketConnection = (server) => {
  const ioServer = new Server(server)

  ioServer.on('connection', SocketCore.connection)
  ioServer.on('disconnect', SocketCore.disconnect)

  return ioServer
}

/*
* URL del cliente:
* https://cdn.socket.io/4.3.2/sockey.io.esm.min.js
*/
