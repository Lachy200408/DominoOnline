class SignUpModel {
	async post (url, obj) {
		return await fetch(url + '/user/new', {
			method: 'POST',
			headers: {"Content-Type": 'application/json'},
			body: JSON.stringify(obj)
		})
		.then(res => res.text())
		.then(result => result)
		.catch(e => null)
	}
}

export const SignUpConnection = new SignUpModel()