//* Models

import { SignInConnection } from "../models/signIn/model.js"
import { SignUpConnection } from "../models/signUp/model.js"
import { WebSocketConnection } from "../models/webSocket/model.js"

//* Utility function

import { getActiveServer } from '../util/activeServer.js'

class Connection {
	constructor () {
		//* Tomar el primer servidor activo que encuentre
		const SERVER_URL = [
			'http://localhost:3080'
		]

		getActiveServer(SERVER_URL).then(url => this.activeServer = url)
	}

	async post (concept, info) {
		if (concept === 'newUser') return await SignUpConnection.post(this.activeServer, info)
	}

	async get (concept, info) {
		if (concept === 'login') return await SignInConnection.get(this.activeServer, info)
	}

	webSocket () {
		return WebSocketConnection
	}
}

export const ConnectionCore = new Connection()