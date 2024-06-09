export class Handlers {
	static cancel (event) {
		event.preventDefault()

		document.getElementById('close-modal').click()
	}

	static insertAvatar () {
		const input = document.querySelector('#avatar'),
					file = input.files[0],
					url = URL.createObjectURL(file)
		
		input.className = 'completed'
		input.style.background = `url(${url}) no-repeat`
		input.style.backgroundPosition = 'center';
  	input.style.backgroundSize = 'contain';
	}

	static async create (event) {
		event.preventDefault()
	
		const form = document.querySelector('#signUp-form'),
					username = form.querySelector('#username').value
					avatar = form.querySelector('#avatar').files[0]

		//* Tomar el array binario de la foto
		const readableStream = avatar.stream()
		const reader = readableStream.getReader()
		const value = await reader.read().then(result => result.value)

		//* Disparar el evento
		const newUser = new Event('newUser', {bubbles: false})
		newUser.info = { username, value }
		dispatchEvent(newUser)

		//* Quitar el mensaje de respuesta
		const p = form.querySelector('p.response')
		if (p) p.remove()
	}
}