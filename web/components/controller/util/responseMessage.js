export const getResponseMessage = (result, username, concept) => {
	const type = (result.username)? 'ok' : 'error'

	let text = ''
	if (concept === 'signUp') {
		text = (result.username)? 										`The user ${username} has been successfully registered.` :
					 (result.message.includes('exists'))? 	`The user ${username} already exists.` :
									 																`An unspected error was ocurred. Check your internet connection.`
	}
	else {
		text = (result.username)? 											`The user ${username} has been successfully loged in.` :
					 (result.message.includes('username'))? 	`The user ${username} does not exists.` :
																										`An unspected error was ocurred. Check your internet connection.`
	}

	return { type, text }
}