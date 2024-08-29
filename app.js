const apiKey = "b2307c350485e16b0b4192656aa07ef5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherPic = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if(response.status === 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else {
    var data = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/hr";
    if(data.weather[0].main == "Clouds") {
        weatherPic.src = "images/clouds.png";
       }
       else if(data.weather[0].main == "Clear") {
        weatherPic.src = "images/clear.png";
       }
       else if(data.weather[0].main == "Rain") {
        weatherPic.src = "images/rain.png";
       }
       else if(data.weather[0].main == "Drizzle") {
        weatherPic.src = "images/drizzle.png"
       }
       else if(data.weather[0].main == "Mist") {
        weatherPic.src = "images/mist.png"
       }

       document.querySelector('.weather').style.display = "block"
       document.querySelector('.error').style.display = "none"
    }
   
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);

})
