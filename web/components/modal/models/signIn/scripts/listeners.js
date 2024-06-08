import { Handlers } from "./handlers.js"

export class Listeners {
	static set () {
		document.querySelector('#signIn-form fieldset:last-child button:first-child').addEventListener('click', Handlers.cancel, false)
		document.querySelector('#signIn-form').addEventListener('submit', Handlers.create, false)
	}
	static unset () {
		document.querySelector('#signIn-form fieldset:last-child button:first-child').removeEventListener('click', Handlers.cancel)
		document.querySelector('#signIn-form').removeEventListener('submit', Handlers.create)
	}
	static reset () {
		this.unset()
		this.set()
	}
}