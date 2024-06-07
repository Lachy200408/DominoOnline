import { CloseModal } from "./scripts/closeModal.js"
import { SUpModel } from "../models/signUp/scripts/model.js"
import { AlertModel } from "../models/alert/scripts/model.js"

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

		this.html.append(CloseModal.btn)
	}

	display (model, message={}) {
		if (model === 'signUp') return SUpModel.init(this.html, Modal.setListenerCloseModal)
		if (model === 'alert') return AlertModel.init(this.html, Modal.setListenerCloseModal, message)
	}

	newMessage (model, message={}) {
		if (model === 'signUp') return SUpModel.response(message)
	}

	static setListenerCloseModal () {
		document.querySelector('#close-modal').addEventListener('click', CloseModal.handler, false)
	}
}

export const ModalCore = new Modal()