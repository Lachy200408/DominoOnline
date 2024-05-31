import { Player } from './objects/player.js'
import { Card } from './objects/card.js'

function StartCards(cdn = "", index = 0)
{
    if(cdn.length === 2){
        cards.push(new Card(cdn[0], cdn[1]))
        return
    }
    
    for(let i = index; i <= 9; i++){
        
        StartCards(cdn + i, index++)
    }
    
}

function RandomNumbersGenerate(){
    let numeros = [];
    while(numeros.length < 40){
        let numero = Math.floor(Math.random()*55)
        
        if(numeros.indexOf(numero) === -1) numeros.push(numero)
            
        }
        return numeros
}
    
function CardsForPlayers(){
        
    for(let i = 0; i < 40;i++){
        if(i < 10)
            cards_player1.push(cards[random_list[i]])
        else if(i < 20)
            cards_player2.push(cards[random_list[i]])
        else if(i < 30)
            cards_player3.push(cards[random_list[i]])
        else if(i < 40)
            cards_player4.push(cards[random_list[i]])
    }
}
    
let cards = []

let random_list = RandomNumbersGenerate()

StartCards()

let cards_player1 = []
let cards_player2 = []
let cards_player3 = []
let cards_player4 = []

CardsForPlayers()


let player_1 = new Player(cards_player1)
let player_2 = new Player(cards_player2)
let player_3 = new Player(cards_player3)
let player_4 = new Player(cards_player4)


export { player_1 }
export { player_2 }
export { player_3 }
export { player_4 }






















