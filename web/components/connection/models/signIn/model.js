class SignInModel {
	async get (url, { username }) {
		return await fetch(url + `/user?username=${username}`)
								 .then(res => res.json())
								 .then(result => result)
								 .catch(e => null)
	}
}

export const SignInConnection = new SignInModel()