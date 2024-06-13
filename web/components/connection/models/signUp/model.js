class SignUpModel {
	async post (url, { username, arrayAvatar, type}) {
		return await fetch(url + `/user/new?username=${username}&avatarName=${username+'.'+type}`, {
			method: 'POST',
			...(
				() => {
					if (arrayAvatar.byteLength === 0) return {}
					return {
						headers: { 'Content-Type': `image/${type}` },
						body: arrayAvatar
					}
				}
			)()
		})
		.then(res => res.json())
		.then(result => result)
		.catch(e => null)
	}
}

export const SignUpConnection = new SignUpModel()