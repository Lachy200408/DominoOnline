import { Player } from './player.js'
import { Card } from './card.js'

let cards = []


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

let unsort_cards = []
let random_list = RandomNumbersGenerate()

StartCards()

for(let number of random_list){
    unsort_cards.push(cards[number])
}











