console.log('client side js code is loaded')

const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const locationMsg = document.querySelector('#locationMsg')
const forecast = document.querySelector('#forecast')

// messageOne.textContent = 'From javascript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchElement.value

    locationMsg.textContent = 'Loading...'
    forecast.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then ((response) => {
        response.json().then((data) => {
            if(data.error) {
                locationMsg.textContent = data.error
            } else {
                locationMsg.textContent = data.location
                forecast.textContent = data.forecast
            }
        })
    })

})