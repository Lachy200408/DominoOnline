export class Handlers {
	static cancel (event) {
		event.preventDefault()

		document.getElementById('close-modal').click()
	}

	static create (event) {
		event.preventDefault()
	
		const form = document.querySelector('#signIn-form'),
					username = form.querySelector('#username').value

		//* Disparar el evento
		const login = new Event('login', {bubbles: false})
		login.info = { username }
		dispatchEvent(login)

		//* Quitar el mensaje de respuesta
		const p = form.querySelector('p.response')
		if (p) p.remove()
	}
}