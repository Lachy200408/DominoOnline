import { Card } from "./objects/card.js"

export class CardsBuilder {
    constructor () {
      this.list = []
      CardsBuilder.start(this.list)
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