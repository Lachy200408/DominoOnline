import { Listeners } from "./listeners.js"

class SignUp {
	constructor () {
		this.Lstn = Listeners
		this.form = ''
		this.css = ''
	}

	async init (html, btnHand) {
		if (document.body.contains(html)) return

		//* Colocar el html
		if (!this.form) {
			this.form = await fetch('/components/modal/models/signUp/index.html').then(res => res.text()).then(formText => formText)
		}
		html.innerHTML += this.form
		html.open = true
		
		//* Colocar los estilos
		if (!this.css) {
			this.css = await fetch('/components/modal/models/signUp/styles/style.css').then(res => res.text()).then(cssText => cssText)
		}
		html.querySelector('style').innerHTML += this.css
		
		document.body.append(html)
		this.Lstn.reset()

		//* Poner a andar el boton de cerrar la modal
		btnHand()
	}

	response (messageObj) {
		const p = document.createElement('p')
		p.className = `${messageObj.type} response`
		p.innerText = messageObj.text

		document.querySelector('#signUp-form>fieldset').after(p)
	}
}

export const SUpModel = new SignUp()