//* Importaciones de modulos

import { UserCore } from "/components/user/controller/user.js"
import { ConnectionCore } from "/components/connection/controller/connection.js"
import { MenuCore } from "/components/mainMenu/scripts/mainMenu.js"
import { ModalCore } from "/components/modal/controller/modal.js"

//* Importaciones de utility functions

import { getResponseMessage } from "./util/responseMessage.js"

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

			"newUser": this.EventFn.newUser,
			"login": this.EventFn.login,
			"logOut": this.EventFn.logout
		}

		return funcs[id]
	}

	static MenuFn = {
		signUp: function () {
			ModalCore.display({ model: 'signUp' })
		},

		signIn: function () {
			ModalCore.display({ model: 'signIn' })
		},

		singlePlayer: function (event) {
			ModalCore.display({
				model: 'alert',
				message: {
					type: 'error',
					text: 'Feature not available'
				}
			})
		},

		multiPlayer: function (event) {
			if (UserCore.loged) {
				//* Comenzar el juego
				ModalCore.display({
					model: 'multiplayer',
					connection: ConnectionCore.webSocket()
				})
			}
			else {
				ModalCore.display({
					model: 'alert',
					message: {
						type: 'error',
						text: 'You must be signed in first.'
					}
				})
			}
		}
	}

	static EventFn = {
		newUser: async function (event) {
			const result = await ConnectionCore.post('newUser', event.info)
			const { type, text } = getResponseMessage(result, event.info.username, 'signUp')
			
			ModalCore.newMessage({ 
				model: 'signUp',
				message: { type, text	}
			})

			//* Loggear al usuario cuando se registre
			if (type === 'ok') {
				const userToPage = UserCore.login(result, ConnectionCore.activeServer)
				MenuCore.userLogedIn(userToPage)
			}
		},

		login: async function (event) {
			const result = await ConnectionCore.get('login', event.info)
			const { type, text } = getResponseMessage(result, event.info.username, 'signIn')

			ModalCore.newMessage({ 
				model: 'signIn',
				message: { type, text }
			})

			if (type === 'ok') {
				const userToPage = UserCore.login(result, ConnectionCore.activeServer)
				MenuCore.userLogedIn(userToPage)
			}
		},

		logout: function () {
			UserCore.reset()
		}
	}
}

//* Event Listeners globales
class Listeners {
	static set () {
		window.addEventListener('newUser', Core.getHandler('newUser'), false)
		window.addEventListener('login', Core.getHandler('login'), false)
		window.addEventListener('logOut', Core.getHandler('logOut'), false)
	}
}
