class CloseBtn {
	constructor () {
		//* Boton de cerrar la modal
		this.btn = document.createElement('button')
		this.btn.id = "close-modal"
		this.btn.innerText = '×'
	}

	handler () {
		document.body.querySelector('.modal').children[2].remove()
		document.body.querySelector('.modal').remove()
	}
}

export const CloseModal = new CloseBtn()