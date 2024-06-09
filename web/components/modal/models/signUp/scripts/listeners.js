import { Handlers } from "./handlers.js"

export class Listeners {
	static set () {
		document.querySelector('#signUp-form fieldset:last-child button:first-child').addEventListener('click', Handlers.cancel, false)
		document.querySelector('#avatar').addEventListener('change', Handlers.insertAvatar, false)
		document.querySelector('#signUp-form').addEventListener('submit', Handlers.create, false)
	}
	static unset () {
		document.querySelector('#signUp-form fieldset:last-child button:first-child').removeEventListener('click', Handlers.cancel)
		document.querySelector('#avatar').removeEventListener('change', Handlers.insertAvatar)
		document.querySelector('#signUp-form').removeEventListener('submit', Handlers.create)
	}
	static reset () {
		this.unset()
		this.set()
	}
}