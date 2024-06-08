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

	static async insert ({ username, password }) {
		try{
			const [userObj] = await connection.query(
				'INSERT INTO users (username, password) VALUES (?, ?);',
				[username, password]
			)

			return userObj.affectedRows === 1
		}
		catch (e){
			console.error(e)
			process.exit(1)
		}
	}

	static async select ({ username, password }) {
		try{
			const [userObj] = await connection.query(
				'SELECT username, password FROM users WHERE username=? AND password=?;',
				[username, password]
			)

			return userObj[0]
		}
		catch (e){
			console.error(e)
			process.exit(1)
		}
	}
}