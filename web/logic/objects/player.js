export class Player{
    constructor(cards)
    {
        this.cards = cards
    }
    PlayCard(card, table,actual_left, actual_right,side = null)
    {
        if(card.left_value == actual_left && card.right_value == actual_right ||
           card.left_value == actual_right && card.right_value == actual_left){
    
            if(side == "left"){
                table.Insert_on_left()
            }
            else if(side == "right"){
                table.Insert_on_right()
            }
        }
        else if(card.left_value == actual_left || card.right_value == actual_left){
            table.Insert_on_left()
        }
        else if(card.left_value == actual_right || card.right_value == actual_right){
            table.Insert_on_right()
        }
    } 
}

