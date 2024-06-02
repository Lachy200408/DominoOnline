import { Player } from "./objects/player.js"
import { Table } from "./objects/table.js"
import { PlayersBuilder } from "./playersBuilder.js"

let cards = []

let random_list = PlayersBuilder.RandomNumbersGenerate()

PlayersBuilder.StartCards(cards)

let cards_player1 = []
let cards_player2 = []
let cards_player3 = []
let cards_player4 = []

PlayersBuilder.CardsForPlayers(cards_player1,cards_player2,cards_player3,cards_player4,random_list,cards)

let cards_players = []

cards_players[0] = cards_player1
cards_players[1] = cards_player2
cards_players[2] = cards_player3
cards_players[3] = cards_player4

let players = []

for(let i = 0; i < 4;i++){
    players.push(new Player(cards_players[i]))
}


let actual_left = '1'
let actual_right = '3'

let actual_cards_to_play = []

let actual_turn = 0;

let table = new Table(null)



//despues sigo me voy a jugar voly





