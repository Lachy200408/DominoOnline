import { Handlers } from "./handlers.js"

export class Listeners {
	static set () {
		//* Event listener de los botones
		document.querySelector('button.theme').addEventListener('click', Handlers.toggleTheme, false)
	}
	static unset () {
		document.querySelector('button.theme').removeEventListener('click', Handlers.toggleTheme)
	}
	static reset () {
		this.unset()
		this.set()
	}
}