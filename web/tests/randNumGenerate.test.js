import { test } from 'node:test'
import assert from 'node:assert'

test('Prueba de array de numeros aleatorios no repetidos', (t) => {
	const array = RandomNumbersGenerate()

	//* Esto es para ver que no se repite ningun numero
	let fallo = false
	array.forEach(num => {
		if (array.filter(_num => _num===num).length !== 1) fallo = true
	})

	assert.equal(fallo, false, array.join(','))
})

function RandomNumbersGenerate(){
	//! No funciona
	const numeros = new Array(40).fill(Math.floor(Math.random()*55))

	//* Codigo viejo
	/* let numeros = [];
	while(numeros.length < 40){
		let numero = Math.floor(Math.random()*55)
		
		if(numeros.indexOf(numero) === -1) numeros.push(numero)
	} */
	return numeros
}