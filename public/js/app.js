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

    fetch('/weather?address=' + location).then ((response) => {
        response.json().then((data) => {
            if(data.error) {
                locationMsg.textContent = data.error
            } else {
                locationMsg.textContent = data.location
                var weather_info = data.forecast.weather_descriptions +
                  ".\n Local time is " + data.forecast.local_time +
                  ".\n It is currently " +
                  data.forecast.temperature +
                  " degrees and it feels like " +
                  data.forecast.feelslike +
                  " degrees. \n Current humidity is " +
                  data.forecast.humidity + "%. \n Current wind speed is " +
                  data.forecast.wind_speed + " mph and the chance of precipitation is "
                  + data.forecast.precip + "%"
                forecast.textContent = weather_info
                console.log(data.forecast.weather_icon)
                document.querySelector('#weather_icon').src = data.forecast.weather_icon
            }
        })
    })

})