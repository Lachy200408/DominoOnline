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
		}

		return funcs[id]
	}

	static MenuFn = {
		signUp: function () {
			ModalCore.display('signUp')
		},

		signIn: function () {
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
			const result = await ConnectionCore.post('newUser', event.info)
			const { type, text } = getResponseMessage(result, event.info.username, 'signUp')
			
			ModalCore.newMessage('signUp', { type: type, text: text	})

			if (type === 'ok') UserCore.login(result)
		},

		login: async function (event) {
			const result = await ConnectionCore.get('login', event.info)
			const { type, text } = getResponseMessage(result, event.info.username, 'signIn')

			ModalCore.newMessage('signIn', { type: type, text: text })

			if (type === 'ok') UserCore.login(result)
		}
	}
}

//* Event Listeners globales
class Listeners {
	static set () {
		window.addEventListener('newUser', Core.getHandler('newUser'), false)
		window.addEventListener('login', Core.getHandler('login', false))
	}
}
