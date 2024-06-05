import { test } from 'node:test'
import assert from 'node:assert'

test('Ver que hace start cards', () => {
  const array = []
  StartCards(array)

  console.log(array)

  assert.equal(array.length, 55)
})

function StartCards (cards, cdn = '', index = 0) {
  if (cdn.length === 2) {
    cards.push(`${cdn[0]}, ${cdn[1]}`)
    return
  }

  for (let i = index; i <= 9; i++) {
    StartCards(cards, cdn + i, index++)
  }
}

class Card {
  constructor (left_value, right_value) {
    this.left_value = left_value
    this.right_value = right_value
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
}

class Cards {
  constructor () {
    this.list = []
    Card.start(this.list)
  }
}

test('Probar la clase Cards', () => {
  const array = []
  StartCards(array)

  const card = new Cards()

  assert(array.join(','), card.list.join(','), array + ' ; ' + card)
})
