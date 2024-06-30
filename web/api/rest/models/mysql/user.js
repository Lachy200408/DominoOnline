import mysql from 'mysql2/promise'

const config = {
	host: 'localhost',
	user: 'root',
	port: 3306,
	password: '@Aa02357110',
	database: 'domino'
}

const connection = await mysql.createConnection(config)

export class UserModel {
	static async exists ({ username }) {
		try {
			//* Ver si existe el usuario
			const [result] = await connection.query(
				'SELECT COUNT(*) AS existe FROM users WHERE username = ?;',
				[username]
			)
			
			return result[0].existe !== 0
		}
		catch (e) {
			console.error(e)
			process.exit(1)
		}
	}

	static async insert ({ username, avatarName }) {
		try{
			const query = avatarName
										?'INSERT INTO users (username, avatar) VALUES (?,?);'
										:'INSERT INTO users (username) VALUES (?);'

			const array = avatarName
										?[username, avatarName]
										:[username]

			const [userObj] = await connection.query(query, array)

			return userObj.affectedRows === 1
		}
		catch (e){
			console.error(e)
			process.exit(1)
		}
	}

	static async select ({ username }) {
		try{
			const [userObj] = await connection.query(
				'SELECT username, avatar FROM users WHERE username=?;',
				[username]
			)

			return userObj[0]
		}
		catch (e){
			console.error(e)
			process.exit(1)
		}
	}
}