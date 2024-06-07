import { test } from "node:test"
import assert from 'node:assert'

//* Tomar el server correcto
const SERVER_URL = [
	'http://localhost:3080/'
]
let activeServer = ''

for (const url of SERVER_URL) {
	const status = await fetch(url).then(res => res.status).then(status => status)

	if (status) {
		activeServer = url
		break	
	}
}

test('El server activo es correcto', () => {
	assert.equal(activeServer, SERVER_URL[0], 'No se está corriendo el server')
})