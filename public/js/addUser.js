const registerForm = document.querySelector('.register-form')
registerForm.addEventListener('submit', (e) => {

    e.preventDefault()

    const formData = new FormData(registerForm)
    const formDataJson = Object.fromEntries(formData)
    console.log(formDataJson)
    const url = 'https://coca-cola-api2.herokuapp.com/usuario'
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(formDataJson),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => console.log(res))
        .catch(error => console.log(error))
})

