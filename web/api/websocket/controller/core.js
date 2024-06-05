import { SocketModel } from '../model/model.js'

export class SocketCore {
  static connection (socket) {
    return SocketModel.connection(socket)
  }

  static disconnect () {
    return SocketModel.disconnect()
  }
}
