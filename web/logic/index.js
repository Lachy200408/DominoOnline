import { Table } from './objects/table.js'
import { Game } from './game.js'

let current_left = '1'
let current_right = '3'

let current_cards_to_play = []

let current_turn = 0

const Players = Game.initPlayers()

Players[current_turn].Play()

const table = new Table(null)


