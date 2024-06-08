//* Models

import { SignInConnection } from "../models/signIn/model.js"
import { SignUpConnection } from "../models/signUp/model.js"

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

	async post (concept, obj) {
		if (concept === 'newUser') return await SignUpConnection.post(this.activeServer, obj)
	}

	async get (concept, info) {
		if (concept === 'login') return await SignInConnection.get(this.activeServer, info)
	}
}

export const ConnectionCore = new Connection()