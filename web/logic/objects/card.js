class Card {
  constructor (left_value, right_value) {
    this.left_value = left_value
    this.right_value = right_value
  }
}

class Cards {
  constructor () {
    this.list = []
    Cards.start(this.list)
  }

  static start (cards, cdn = '', index = 0) {
    if (cdn.length === 2) {
      cards.push(new Card(cdn[0], cdn[1]))
      return
    }
    for (let i = index; i <= 9; i++) {
      this.start(cards, cdn + i, index++)
    }
  }

  static instance = new Cards()
}

/*
* Podemos utilizar singleton para tomar el array de cards
* una sola vez en toda la aplicacion.
*/

export class ArrayCards {
  static init () {
    return Cards.instance
  }
}
