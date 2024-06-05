import { Player } from './objects/player.js'
import { Table } from './objects/table.js'
import { PlayersBuilder } from './playersBuilder.js'

//* Las nuevas cards
import { ArrayCards } from './objects/card.js'

const Cards = ArrayCards.init()

const random_list = PlayersBuilder.RandomNumbersGenerate()

//* Esto no es necesario porque al iniciar ArrayCards ya tenemos todas las cards
/* PlayersBuilder.StartCards(cards) */

const cards_player1 = []
const cards_player2 = []
const cards_player3 = []
const cards_player4 = []

PlayersBuilder.CardsForPlayers(cards_player1, cards_player2, cards_player3, cards_player4, random_list, Cards.list)

const cards_players = []

cards_players[0] = cards_player1
cards_players[1] = cards_player2
cards_players[2] = cards_player3
cards_players[3] = cards_player4

const players = []

for (let i = 0; i < 4; i++) {
  players.push(new Player(cards_players[i]))
}

const actual_left = '1'
const actual_right = '3'

const actual_cards_to_play = []

const actual_turn = 0

const table = new Table(null)

// despues sigo me voy a jugar voly
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
