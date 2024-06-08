import { test } from 'node:test'
import assert from 'node:assert'

test('Objeto pasado por parametros', ()=>{
	assert.ok(A({ info: 'a' }), 'Oh rayos')
})

function A (event) {
	const test = B('hola', {info: event.info})

	return test === event.info
}

function B (concept, { info }) {
	return info
}