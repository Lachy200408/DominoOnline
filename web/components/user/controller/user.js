class User {
	constructor () {
		this.username = ''
		this.avatar = new Image()
	}

	login (data, url) {
		this.username = data.username
		this.avatar.src = url + '/user/avatar/' + data.avatar

		return { username: this.username, avatar: this.avatar }
	}
}

export const UserCore = new User()