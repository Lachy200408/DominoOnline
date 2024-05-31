import { Card } from "./objects/card.js"
import { Table } from "./objects/table.js"
import { player_1 } from "./playersBuilders.js"
import { player_2 } from "./playersBuilders.js"
import { player_3 } from "./playersBuilders.js"
import { player_4 } from "./playersBuilders.js"

let actual_left = '1'
let actual_right = '3'

let actual_turn = 0;

let table = new Table(null)

function PlayCard(card, table, side, player)
{
    if(side){
        if(card.right != actual_left){
            console.log("Error: NO MATCH")
            return
        }
        table.Insert_on_left()
    }
    else{
        if(card.left != actual_right){
            console.log("Error: NO MATCH")
            return
        }
        table.Insert_on_right()
    }
    //player.fichas.remove(card)
}

function PlayerCanPlay(actual_player){
    return true //si el jugador tiene alguna ficha que pueda jugar
}

function Next(){
        actual_turn++
}




