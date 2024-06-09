class User {
	constructor () {
		this.username = ''
	}

	login (data) {
		this.username = data.username
	}
}

export const UserCore = new User()