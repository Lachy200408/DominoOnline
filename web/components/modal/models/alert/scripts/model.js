class Alert {
	constructor () {
		this.css = ''
	}

	async init (html, btnHand, messageObj) {
		if (document.body.contains(html)) return

		html.innerHTML += `<p class="${messageObj.type} alert">${messageObj.text}</p>`
		html.open = true
		
		//* Colocar los estilos
		if (!this.css) {
			this.css = await fetch('/components/modal/models/alert/styles/style.css').then(res => res.text()).then(cssText => cssText)
		}
		html.querySelector('style').innerHTML += this.css
		
		document.body.append(html)

		//* Poner a andar el boton de cerrar la modal
		btnHand()
	}
}

export const AlertModel = new Alert()