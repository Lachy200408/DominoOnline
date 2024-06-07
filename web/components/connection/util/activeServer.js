export const getActiveServer = async (array) => {
	for (const url of array) {
		let status = 0

		try{
			await fetch(url + '/check')
						.then(res => res.status)
						.then(_status => status = _status)
		}
		catch{
			status = 0
		}
		finally{
			if (status != 0) return url
			return array[0]
		}
	}
}