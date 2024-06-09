import { Game } from "./game.js"
import { Player } from "./objects/player.js"
export class PlayersBuilder {
  
  constructor(){

    const Cards = Game.initCards()
    
    this.players = []
    
    const randomList = PlayersBuilder.randomNumbersGenerate()

    let cardsList1 = []
    let cardsList2 = []
    let cardsList3 = []
    let cardsList4 = []
    
    for(let i = 0; i < 40;i++){
      
      if (i < 10) { cardsList1.push(Cards[randomList[i]]) } 
      else if (i < 20) { cardsList2.push(Cards[randomList[i]]) } 
      else if (i < 30) { cardsList3.push(Cards[randomList[i]]) } 
      else if (i < 40) { cardsList4.push(Cards[randomList[i]]) }

    }

    this.players.push(new Player(cardsList1))
    this.players.push(new Player(cardsList2))
    this.players.push(new Player(cardsList3))
    this.players.push(new Player(cardsList4))
    
      
  }

  static randomNumbersGenerate () {
    const numeros = []
    while (numeros.length < 40) {
      const numero = Math.floor(Math.random() * 55)

      if (numeros.indexOf(numero) === -1) numeros.push(numero)
    }
    return numeros
  }
}
