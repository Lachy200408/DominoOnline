export class Handlers {

	static toggleTheme (event) {
		const btn = event.target,
					isLight = btn.classList.contains('light')

		if (isLight) {
			btn.classList.replace('light', 'dark')
			document.body.querySelector('main').classList.replace('light', 'dark')
		}
		else {
			btn.classList.replace('dark', 'light')
			document.body.querySelector('main').classList.replace('dark', 'light')
		}
			
		document.body.querySelector('main>header>img').src = (!isLight)? '/assets/images/branding.svg' : '/assets/images/branding-dark.svg'
	}

	static startMenu (event) {
		const btn = event.target
		btn.classList.add('disabled')
		document.querySelector('main>header>img').classList.add('toHeader') 

		setTimeout(()=>{
			btn.remove()
			document.querySelector('main').classList.add('started')
			document.querySelector('main>header>img').className = ''
		},400)
	}

}