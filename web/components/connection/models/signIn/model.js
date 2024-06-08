class SignInModel {
	async get (url, { username, password}) {
		return await fetch(url + `/user?username=${username}&password=${password}`)
								 .then(res => res.json())
								 .then(result => result)
								 .catch(e => null)
	}
}

export const SignInConnection = new SignInModel()