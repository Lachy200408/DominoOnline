export class Handlers {
	static toggleTheme () {
		const main = document.body.querySelector('main'),
					isLight = main.classList.contains('light')

		if (isLight) main.classList.replace('light', 'dark')
		else main.classList.replace('dark', 'light')
			
		main.querySelector('header>img').src = (!isLight)? '/assets/images/branding.svg' : '/assets/images/branding-dark.svg'
	}
}