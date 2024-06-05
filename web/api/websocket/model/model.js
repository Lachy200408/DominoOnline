export class SocketModel {
  static connection (socket) {
    console.log('A user is connected')
  }

  static disconnect () {
    console.log('A user is disconnect')
  }
}
