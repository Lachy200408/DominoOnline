import { Player } from "./objects/player.js"
import { Table } from "./objects/table.js"
import { PlayersBuilder } from "./playersBuilder.js"

//* Las nuevas cards
import { ArrayCards } from "./objects/card.js"

const Cards = ArrayCards.init()

let random_list = PlayersBuilder.RandomNumbersGenerate()

//* Esto no es necesario porque al iniciar ArrayCards ya tenemos todas las cards
/* PlayersBuilder.StartCards(cards) */

let cards_player1 = []
let cards_player2 = []
let cards_player3 = []
let cards_player4 = []

PlayersBuilder.CardsForPlayers(cards_player1, cards_player2, cards_player3, cards_player4, random_list, Cards.list)

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
/*
* Brother instala la extension "Better Comments"
* pa que los comentarios tengan colorcito
* e identificarlos mejor.
* Aparte de comentar mas 🤣🤣

* Usa tests para probar y pa yo saber cual es el
* objetivo de las funciones.
* Vas al package.json y, donde dice script, agregas
* el que hagas con el nombre que quieras, luego escribes
* node --run (nombre_de_tu_script)

* import { test } from 'node:test' => Los test
* import assert from 'node:assert' => Funciones que validan los tests
* 
* test('Nombre de tu test', () => {
* 	assert.equal(0, 0, 'Mensaje en caso de fallo')
* })
*/




