import { Listeners } from "./listeners.js"
import { Handlers } from "./handlers.js"

class MainMenu {
	constructor () {
		this.html = document.createElement('main')
		this.Hand = Handlers
		this.Lstn = Listeners
	}

	init (Core) {
		this.GlobalCore = Core

		return this.loadMenu()
	}

	async loadMenu () {
		//* Insertar el html
		await fetch('/components/mainMenu/mainMenu.html')
					.then(res => res.text())
					.then(data => {
						this.html.innerHTML = data
						this.html.className = 'light'

						document.body.append(this.html)
						this.Lstn.set()
					})

		//* Insertar el css
		await fetch('/components/mainMenu/styles/style.css')
					.then(res => res.text())
					.then(css => {
						this.html.querySelector('style').innerHTML = css
					})
	}

	userLogedIn ({ username, avatar }) {
		this.html.querySelector('.user-name').textContent = username
		this.html.querySelector('.avatar>img').src = avatar.src

		this.html.querySelectorAll('#signIn, #signUp').forEach(btn => btn.classList.add('disabled'))
		this.html.querySelector('#signOut').classList.remove('disabled')
	}
}

export const MenuCore = new MainMenu()