import { SUpModel } from "../models/signUp/scripts/model.js"

class Modal {
	constructor () {
		this.html = document.createElement('dialog')
		this.html.className = 'modal'

		fetch('/components/modal/controller/styles/style.css')
		.then(res => res.text())
		.then(css => {
			const style = document.createElement('style')
			style.innerHTML = css
			this.html.append(style)
		})
	}

	display (model) {
		if (model === 'signUp') return SUpModel.init(this.html)
	}
}

export const ModalCore = new Modal()