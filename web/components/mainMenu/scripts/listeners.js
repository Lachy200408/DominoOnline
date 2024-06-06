import { MenuCore } from "./mainMenu.js"

export class Listeners {
	static set () {
		//* Event listener de los botones
		document.querySelector('button.theme').addEventListener('click', MenuCore.Hand.toggleTheme, false)
		document.querySelectorAll('header>nav>.btn:not(.theme)').forEach(btn => {
			btn.addEventListener('click', MenuCore.GlobalCore.getHandler(btn.id),false)
		})
	}
	static unset () {
		document.querySelector('button.theme').removeEventListener('click', MenuCore.Hand.toggleTheme)
		document.querySelectorAll('header>nav>.btn:not(.theme)').forEach(btn => {
			btn.removeEventListener('click', MenuCore.GlobalCore.getHandler(btn.id))
		})
	}
	static reset () {
		this.unset()
		this.set()
	}
}