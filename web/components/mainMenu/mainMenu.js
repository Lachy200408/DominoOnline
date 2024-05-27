import { Handlers } from "./handlers.js"

export class MainMenu extends Handlers {

	static html = document.createElement('main')

	static init (callback) {
		this.loadMenu()
		return this.getMenu(callback)
	}

	static async loadMenu () {
		await fetch('/components/mainMenu/mainMenu.html')
					.then(res => res.text())
					.then(data => {
						this.html.innerHTML = data
						this.html.className = 'light'

						//* Event listener de los botones
						this.html.querySelector('button.theme').addEventListener('click', this.toggleTheme, false)
						this.html.querySelector('button.start').addEventListener('click', this.startMenu, false)
					})

		await fetch('/components/mainMenu/style.css')
					.then(res => res.text())
					.then(css => {
						this.html.querySelector('style').innerHTML = css
					})
	}

	static getMenu (callback) {
		return callback(this.html)
	}

}