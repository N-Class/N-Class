const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=ce5a0604d930f50913f80088834bcd95"
const fcUrl = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=ce5a0604d930f50913f80088834bcd95'

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function capitalizeFLetter(str) {
    if (str.includes(' ')) {
        let first = str.split(' ')[0]
        let second = str.split(' ')[1]
        return first.charAt(0).toUpperCase() + first.slice(1) + " " + second
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
}

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('currently').textContent = jsObject.weather[0].main
    document.getElementById('high').textContent = jsObject.main.temp_max
    document.getElementById('humidity').textContent = jsObject.main.humidity
    document.getElementById('wind-speed').textContent = jsObject.wind.speed
    document.getElementById('currently').textContent = capitalizeFLetter(jsObject.weather[0].description)
});

fetch(fcUrl)
    .then(response => response.json())
    .then(jsObject => {
        const fc = jsObject.list.filter(item => item.dt_txt.includes('18:00:00'))
        const rows = document.querySelectorAll('.row a span')
        const icons = document.querySelectorAll('.row img')
        const days = document.querySelectorAll('th')

        for (let i = 0; i < rows.length; i++) {
            const date = new Date(fc[i].dt_txt)
            const day = weekdays[date.getDay()]
            rows[i].textContent = Math.round(fc[i].main.temp)
            icons[i].setAttribute('src', `https://openweathermap.org/img/wn/${fc[i].weather[0].icon}@2x.png`)
            icons[i].setAttribute('alt', fc[i].weather[0].description)
            days[i].textContent = day
        }
    })