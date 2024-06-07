export class Handlers {
	static cancel (event) {
		event.preventDefault()

		document.getElementById('close-modal').click()
	}

	static create (event) {
		event.preventDefault()
	
		const form = document.querySelector('#signUp-form'),
					username = form.querySelector('#username').value,
					password = form.querySelector('#password').value

		//* Disparar el evento
		const newUser = new Event('newUser', {bubbles: false})
		newUser.info = {
			username,
			password
		}
		dispatchEvent(newUser)

		//* Quitar el mensaje de respuesta
		const p = form.querySelector('p.response')
		if (p) p.remove()
	}
}