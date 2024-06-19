import { MenuCore } from "./mainMenu.js"

export class Listeners {
	static set () {
		//* Event listener de los botones
		document.querySelector('button.theme').addEventListener('click', MenuCore.Hand.toggleTheme, false)
		document.querySelector('button#signOut').addEventListener('click', MenuCore.Hand.logOut, false)
		document.querySelectorAll('header>nav>.btn:not(.theme)').forEach(btn => {
			btn.addEventListener('click', MenuCore.GlobalCore.getHandler(btn.id),false)
		})
	}
	static unset () {
		document.querySelector('button#signOut').removeEventListener('click', MenuCore.Hand.logOut, false)
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