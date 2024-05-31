import { MainMenu } from "../components/mainMenu/mainMenu.js"

window.onload = function () {
	MainMenu.init(html => document.body.append(html))
}