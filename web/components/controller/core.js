//* Importaciones de modulos

import { ConnectionCore } from "/components/connection/controller/connection.js"
import { MenuCore } from "/components/mainMenu/scripts/mainMenu.js"
import { ModalCore } from "/components/modal/controller/modal.js"

//* Nucleo principal

export class Core {
	static entry () {
		//* Inicializar los listeners
		Listeners.set()

		return MenuCore.init(Core)
	}

	static getHandler (id) {
		return Handlers.get(id)
	}
}

//* Manejadores principales

class Handlers {
	static get (id) {
		const funcs = {
			"single": this.MenuFn.singlePlayer,
			"multiplayer": this.MenuFn.multiPlayer,
			"signIn": this.MenuFn.signIn,
			"signUp": this.MenuFn.signUp,

			"newUser": this.EventFn.newUser
		}

		return funcs[id]
	}

	static MenuFn = {
		signUp: function () {
			ModalCore.display('signUp')
		},

		signIn: function () {
			//! Pendiente
			ModalCore.display('signIn')
		},

		singlePlayer: function (event) {
			ModalCore.display('alert', {
				type: 'error',
				text: 'Feature not available'
			})
		},

		multiPlayer: function (event) {
			ModalCore.display('alert', {
				type: 'error',
				text: 'Feature not available'
			})
		}
	}

	static EventFn = {
		newUser: async function (event) {
			const result = await ConnectionCore.post('newUser', {
				username: event.info.username,
				password: event.info.password
			})

			const text = (result === 'ok')? 		`The user ${event.info.username} has been successfully registered.` :
									 (result === 'exists')? `The user ${event.info.username} already exists.` :
									 												`An unspected error was ocurred. Check your internet connection.`,
						type = (result === 'ok')? 'ok' : 'error' 
			
			return ModalCore.newMessage('signUp', {
				type: type,
				text: text
			})
		}
	}
}

//* Event Listeners globales
class Listeners {
	static set () {
		window.addEventListener('newUser', Core.getHandler('newUser'), false)
	}
}
