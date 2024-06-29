import { CardsBuilder } from './cardsBuilder.js'
import { PlayersBuilder } from './playersBuilder.js'

export class Game{

    static start(){

        
    }
    static over(){

    }
    static isNotOverUntilIWin(){

    }
    static initCards () {
        let cards = new CardsBuilder()
    
        return cards.list
    }

    static initPlayers(){
        let playerBuilder = new PlayersBuilder()

        return playerBuilder.players
    }
     
    static nextTurn(actual_turn){
            actual_turn = (actual_turn + 1) % 4
    }
    static pareNone(){
        return 0;
    }
    static countPoints(){

    }
    
    
}