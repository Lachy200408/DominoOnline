export class Handlers {
	static toggleTheme () {
		const main = document.body.querySelector('main'),
					isLight = main.classList.contains('light')

		if (isLight) main.classList.replace('light', 'dark')
		else main.classList.replace('dark', 'light')
			
		main.querySelector('header>img').src = (!isLight)? '/assets/images/branding.svg' : '/assets/images/branding-dark.svg'
	}

	static logOut () {
		document.querySelector('.user-name').textContent = 'Player1'
		document.querySelector('.avatar>img').src = '/assets/images/default-avatar.svg'

		document.querySelectorAll('#signIn, #signUp').forEach(btn => btn.classList.remove('disabled'))
		document.querySelector('#signOut').classList.add('disabled')

		//* Disparar el evento para que lo tome el core
		const event = new Event('logOut')
		dispatchEvent(event)
	}
}