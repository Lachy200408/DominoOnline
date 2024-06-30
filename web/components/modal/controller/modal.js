import { CloseModal } from "./scripts/closeModal.js"
import { SUpModel } from "../models/signUp/scripts/model.js"
import { SInModel } from "../models/signIn/scripts/model.js"
import { AlertModel } from "../models/alert/scripts/model.js"
import { MPModel } from "../models/multiplayer/scripts/model.js"

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

	display ({ model, message={}, connection}) {
		if (model === 'signUp') return SUpModel.init(this.html, Modal.setListenerCloseModal)
		if (model === 'signIn') return SInModel.init(this.html, Modal.setListenerCloseModal)
		if (model === 'alert') return AlertModel.init(this.html, Modal.setListenerCloseModal, message)
		if (model === 'multiplayer') return MPModel.init(this.html, Modal.setListenerCloseModal, connection)
	}

	newMessage (model, message={}) {
		if (model === 'signUp') return SUpModel.response(message)
		if (model === 'signIn') return SInModel.response(message)
	}

	static setListenerCloseModal () {
		document.querySelector('#close-modal').addEventListener('click', CloseModal.handler, false)
	}
}

export const ModalCore = new Modal()