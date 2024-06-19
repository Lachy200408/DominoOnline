class SignUpModel {
	async post (url, { username, arrayAvatar, type}) {
		return arrayAvatar?
				await fetch(url + `/user/new?username=${username}&avatarName=${username+'.'+type}`, {
								method: 'POST',
								headers: { 'Content-Type': `image/${type}` },
								body: arrayAvatar
							})
							.then(res => res.json())
							.then(result => result)
							.catch(e => null)

				:

				await fetch(url + `/user/new?username=${username}`, {	method: 'POST' })
							.then(res => res.json())
							.then(result => result)
							.catch(e => null)
	}
}

export const SignUpConnection = new SignUpModel()