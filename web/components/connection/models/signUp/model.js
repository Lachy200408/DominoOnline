class SignUpModel {
	async post (url, { username, array, type}) {
		const portion = Math.floor(array.length / 20)

		for (let i=0; i<20; i++) {
			const start = i*portion, end = start+portion
			let arrayPortion = []

			if (i===20) arrayPortion = array.slice(start)
			else arrayPortion = array.slice(start, end)

			await fetch(url + `/user/avatar?total=20&type=${type}`, { method: 'POST', body: arrayPortion.join(',') })
		}
		//! Falta catchear el error de servidor por imagenes muy grandes

		return await fetch(url + `/user/new?username=${username}`, { method: 'POST' })
		.then(res => res.json())
		.then(result => result)
		.catch(e => null)
	}
}

export const SignUpConnection = new SignUpModel()