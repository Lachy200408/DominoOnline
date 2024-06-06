import { MenuCore } from "/components/mainMenu/scripts/mainMenu.js"

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
			"single": this.singlePlayer,
			"multiplayer": this.multiPlayer,
			"signIn": this.signIn,
			"signUp": this.signUp
		}

		return funcs[id]
	}

	static signUp (event) {
		console.log(event.target.id);
	}

	static signIn (event) {
		console.log(event.target.id);
	}

	static singlePlayer (event) {
		console.log(event.target.id);
	}

	static multiPlayer (event) {
		console.log(event.target.id);
	}

}
