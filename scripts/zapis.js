document.getElementById('openFormBtn').addEventListener('click', function () {
	const formContainer = document.getElementById('formWraper')
	formContainer.style.display = 'flex'
})

document.getElementById('closeZapisForm').addEventListener('click', function () {
	const formContainer = document.getElementById('formWraper')
	formContainer.style.display = 'none'
})

document.getElementById('submitZapisBtn').addEventListener('click', function () {
	const form = document.getElementById('zapisForm')
	form.reset();
})