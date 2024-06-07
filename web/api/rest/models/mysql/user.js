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
	static async signUp ({ username, password }) {
		try{
			//* Ver si existe el usuario
			const [result] = await connection.query(
				'SELECT COUNT(*) AS existe FROM users WHERE username = ?;',
				[username]
			)
			if (result[0].existe !== 0) return 'exists'

			//* Si no existe, ponerlo en la tabla
			const [userObj] = await connection.query(
				'INSERT INTO users (username, password) VALUES (?, ?);',
				[username, password]
			)
			if (userObj.affectedRows === 1) return 'ok'
		}
		catch (err){
			console.log(err)
		}
	}
}