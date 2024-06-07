class SignUpModel {
	async post (url, obj) {
		return await fetch(url + '/newUser', {
			method: 'POST',
			headers: {"Content-Type": 'application/json'},
			body: JSON.stringify(obj)
		})
		.then(res => res.text())
		.then(result => result)
	}
}

export const SignUpConnection = new SignUpModel()