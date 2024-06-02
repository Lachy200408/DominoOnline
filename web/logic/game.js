export class Game{

    static Start(){

    }
    static Over(){

    } 
    
    static PlayerCanPlay(actual_player){
        for(let card of actual_player.cards){
            if(CanPlayCard(card)){
                actual_cards_to_play.push(card)
            }            
        }
    }
    
    static NextTurn(actual_turn){
            actual_turn = (actual_turn + 1) % 4
    }
    
    static CanPlayCard(card){
       return card.left_value == actual_left || card.left_value == actual_right || 
              card.right_value == actual_left || card.right_value == actual_left
    }
}