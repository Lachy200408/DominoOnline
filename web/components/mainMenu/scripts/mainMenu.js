import { Listeners } from "./listeners.js"

export class MainMenu {
	static html = document.createElement('main')

	static init () {
		this.loadMenu()
	}

	static async loadMenu () {
		//* Insertar el html
		await fetch('/components/mainMenu/mainMenu.html')
					.then(res => res.text())
					.then(data => {
						this.html.innerHTML = data
						this.html.className = 'light'

						document.body.append(this.html)
						Listeners.set()
					})

		//* Insertar el css
		await fetch('/components/mainMenu/styles/style.css')
					.then(res => res.text())
					.then(css => {
						this.html.querySelector('style').innerHTML = css
					})
	}
}