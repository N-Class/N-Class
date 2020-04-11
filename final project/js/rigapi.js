const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83549&units=imperial&APPID=ce5a0604d930f50913f80088834bcd95"

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