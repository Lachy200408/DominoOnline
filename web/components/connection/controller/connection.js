import { SignUpConnection } from "../models/signUp/model.js"
import { getActiveServer } from '../util/activeServer.js'

class Connection {
	constructor () {
		//* Tomar el primer servidor activo que encuentre
		const SERVER_URL = [
			'http://localhost:3080'
		]

		getActiveServer(SERVER_URL).then(url => this.activeServer = url)
	}

	async post (concept, obj) {
		if (concept === 'newUser') return await SignUpConnection.post(this.activeServer, obj)
	}
}

export const ConnectionCore = new Connection()