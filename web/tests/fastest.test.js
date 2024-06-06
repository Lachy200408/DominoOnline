import { test } from 'node:test'
import assert from 'node:assert'

test('Funciona el diccionario', () => {
	Handlers.get({id: 'single'})()
	Handlers.get({id: 'multiplayer'})()
	Handlers.get({id: 'signIn'})()
	Handlers.get({id: 'signUp'})()
})

class Handlers {
	static get ({ id }) {
		const funcs = {
			"single": this.singlePlayer,
			"multiplayer": this.multiPlayer,
			"signIn": this.signIn,
			"signUp": this.signUp
		}

		return funcs[id]
	}

	static signUp () {
		console.log('up');
	}

	static signIn () {
		console.log('in');
	}

	static singlePlayer () {
		console.log('single');
	}

	static multiPlayer () {
		console.log('multi');
	}
}