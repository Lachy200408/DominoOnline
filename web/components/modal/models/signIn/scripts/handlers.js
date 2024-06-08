export class Handlers {
	static cancel (event) {
		event.preventDefault()

		document.getElementById('close-modal').click()
	}

	static create (event) {
		event.preventDefault()
	
		const form = document.querySelector('#signIn-form'),
					username = form.querySelector('#username').value,
					password = form.querySelector('#password').value

		//* Disparar el evento
		const login = new Event('login', {bubbles: false})
		login.info = {
			username,
			password
		}
		dispatchEvent(login)

		//* Quitar el mensaje de respuesta
		const p = form.querySelector('p.response')
		if (p) p.remove()
	}
}