import { Table } from './objects/table.js'
import { Game } from './game.js'

let currentLeft = '1'
let currentRight = '3'

let countPass = 0;

let currentCardsToPlay = []

let currentTurn = 0

const Players = Game.initPlayers()
const table = new Table(null)

currentTurn = Game.pareNone()

while(Game.isNotOverUntilIWin()){

    let currentPlayer = Players[currentTurn]
    
    if(currentPlayer.canPlay(currentCardsToPlay)){// currentCardsToPlay es una lista de las fichas que el jugador puede jugar
        
        countPass = 0;

        let card = currentPlayer.selectCard()
    
        if(card.left_value == actual_left && card.right_value == actual_right ||
            card.left_value == actual_right && card.right_value == actual_left){
        
                let side = currentPlayer.selectSide()
    
                if(side == "left"){
                    table.insert_on_left()
                }
                else if(side == "right"){
                    table.insert_on_right()
                }
        }
        let isOver = currentPlayer.putCard(card)

        if(isOver){
            Game.over()
        }
    }
    else{
        
        countPass++
        
        if(countPass == 4){
            Game.countPoints()
            Game.over()
        }
    }
    //currentCardsToPlay.Clear()
    Game.nextTurn()
}




