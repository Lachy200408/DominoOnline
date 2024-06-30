class User {
	constructor () {
		this.username = ''
		this.avatar = new Image()
	}

	login (data, url) {
		this.username = data.username
		this.loged = true
		
		if (data.avatar) this.avatar.src = url + '/user/avatar/' + data.avatar
		else this.avatar.src = '/assets/images/default-avatar.svg'

		return { username: this.username, avatar: this.avatar }
	}

	reset () {
		this.username = ''
		this.avatar.src = ''
		this.loged = false
	}
}

export const UserCore = new User()