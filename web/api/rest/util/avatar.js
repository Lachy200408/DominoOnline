class Avatar {
	constructor () {
		this.totalEnvios = 0
		this.current = 0
		this.array = []
	}

	init (_totalEnvios) {
		this.totalEnvios = _totalEnvios
	}

	push (text) {
		if (this.current !== this.totalEnvios) {
			const partialArray = text.split(',')
			this.array.push(...partialArray)
			this.current++
		}
	}

	get () {
		return [...this.array]
	}

	completed () {
		return this.totalEnvios === this.current
	}

	reset () {
		this.totalEnvios = 0
		this.current = 0
	}

	ready () {
		return (this.array.length===0 && this.totalEnvios===0)
	}

	async save (nombre, writeFile) {

	}
}

export const AvatarModel = new Avatar()