export class Player{

    constructor(cards)
    {
        this.cards = cards
    }
    play(){

    }
    selectCard(){

    }
    selectSide(){

    }
    putCard(card, table,actual_left, actual_right)
    {      
        if(card.left_value == actual_left || card.right_value == actual_left){
            table.insert_on_left()
        }
        else if(card.left_value == actual_right || card.right_value == actual_right){
            table.insert_on_right()
        }
        return false
    }
    canPlay(actualCardsToPlay){
        for(let card of this.cards){          
            let canPlay = false
            
            if(card.left_value == actual_left || card.left_value == actual_right || 
              card.right_value == actual_left || card.right_value == actual_left)
            {
                actualCardsToPlay.push(card)
                canPlay = true
            }     
            return canPlay  
        }
    }
}

