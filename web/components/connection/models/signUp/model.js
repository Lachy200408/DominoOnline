class SignUpModel {
	async post (url, info) {
		return await fetch(url + '/user/new', {
			method: 'POST',
			headers: {"Content-Type": 'application/json'},
			body: JSON.stringify(info)
		})
		.then(res => res.json())
		.then(result => result)
		.catch(e => null)
	}
}

export const SignUpConnection = new SignUpModel()