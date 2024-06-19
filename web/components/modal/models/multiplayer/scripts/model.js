class Multiplayer {
	constructor () {
		this.form = ''
		this.css = ''
	}

	async init (html, btnHand, connection) {
		this.connection = connection //! Terminar

		if (document.body.contains(html)) return

		//* Colocar el html
		if (!this.form) {
			this.form = await fetch('/components/modal/models/multiplayer/index.html').then(res => res.text()).then(formText => formText)
		}
		html.innerHTML += this.form
		html.open = true
		
		//* Colocar los estilos
		if (!this.css) {
			this.css = await fetch('/components/modal/models/multiplayer/styles/style.css').then(res => res.text()).then(cssText => cssText)
		}
		html.querySelector('style').innerHTML += this.css
		
		document.body.append(html)

		//* Poner a andar el boton de cerrar la modal
		btnHand()
	}
}

export const MPModel = new Multiplayer()