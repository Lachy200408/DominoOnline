import { MainMenu } from "/components/mainMenu/scripts/mainMenu.js"

export class Core {
	static entry () {
		return MainMenu.init()
	}
}