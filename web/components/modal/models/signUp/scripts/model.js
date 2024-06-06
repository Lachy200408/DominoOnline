class SignUp {
	async init (html) {
		await fetch('/components/modal/models/signUp/index.html')
					.then(res => res.text())
					.then(form => {
						html.innerHTML += form
						document.body.append(html)
					})
	}
}

export const SUpModel = new SignUp()