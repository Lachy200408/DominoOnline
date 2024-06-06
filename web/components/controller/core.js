import { MenuCore } from "/components/mainMenu/scripts/mainMenu.js"
import { ModalCore } from "../modal/controller/modal.js"

export class Core {
	static entry () {
		return MenuCore.init(Core)
	}

	static getHandler (id) {
		return Handlers.get(id)
	}
}

class Handlers {

	static get (id) {
		const funcs = {
			"single": this.MenuFn.singlePlayer,
			"multiplayer": this.MenuFn.multiPlayer,
			"signIn": this.MenuFn.signIn,
			"signUp": this.MenuFn.signUp
		}

		return funcs[id]
	}

	static MenuFn = {
		signUp: function () {
			ModalCore.display('signUp')
		},

		signIn: function (event) {
			console.log(event.target.id);
		},

		singlePlayer: function (event) {
			console.log(event.target.id);
		},

		multiPlayer: function (event) {
			console.log(event.target.id);
		}
	}
}
