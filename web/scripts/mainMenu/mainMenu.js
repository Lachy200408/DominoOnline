export class MainMenu {
	static html = document.createElement('main')

	static async loadMenu () {
		await fetch('/html/mainMenu.html')
					.then(res => res.text())
					.then(data => {
						this.html.innerHTML = data
						this.html.className = 'light'
					})
	}

	static async getMenu (callback) {
		return callback(this.html)
	}
}