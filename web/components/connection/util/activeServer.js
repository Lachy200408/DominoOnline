export const getActiveServer = async (array) => {
	for (const url of array) {
		const status = await fetch(url).then(res => res.status).then(status => status)

		if (status) return url
		return array[0]
	}
}