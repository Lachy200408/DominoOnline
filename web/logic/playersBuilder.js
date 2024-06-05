/* import { Card } from './objects/card.js' */
export class PlayersBuilder {
  //* Esto no haria falta con la clase Cards
  /* static StartCards(cards,cdn = "", index = 0)
    {
        if(cdn.length === 2){
            cards.push(new Card(cdn[0], cdn[1]))
            return
        }

        for(let i = index; i <= 9; i++){
            this.StartCards(cards,cdn + i, index++)
        }

    } */

  static RandomNumbersGenerate () {
    const numeros = []
    while (numeros.length < 40) {
      const numero = Math.floor(Math.random() * 55)

      if (numeros.indexOf(numero) === -1) numeros.push(numero)
    }
    return numeros
  }

  static CardsForPlayers (cards_player1, cards_player2, cards_player3, cards_player4, random_list, cards) {
    for (let i = 0; i < 40; i++) {
      if (i < 10) { cards_player1.push(cards[random_list[i]]) } else if (i < 20) { cards_player2.push(cards[random_list[i]]) } else if (i < 30) { cards_player3.push(cards[random_list[i]]) } else if (i < 40) { cards_player4.push(cards[random_list[i]]) }
    }
  }
}
