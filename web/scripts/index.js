import { MainMenu } from "./mainMenu/mainMenu.js"

window.onload = function () {
	MainMenu.loadMenu()
	MainMenu.getMenu(html => {
		document.body.append(html)

		MainMenu.Botones.comenzar()
	})
}