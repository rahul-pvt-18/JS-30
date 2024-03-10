const apiKey = '87ee86a0c213c090d0276dc73a76df59';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const cityName = document.querySelector('.city');
const temprature = document.querySelector('.temp');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const searchBox = document.querySelector('.search-container input');
const searchBtn = document.querySelector('.search-container button');
const weatherIcon = document.querySelector('.weather-icon');
const weatherContainer = document.querySelector('.weather-container');
const errorBox = document.querySelector('.error');  

async function checkWeather(city){
    const response = await fetch(apiURL+city+`&appid=${apiKey}`);
    if(response.status == 404){
        errorBox.setAttribute('style','display:block');
        weatherContainer.setAttribute('style','display:none');
    }
    else{
        var data = await response.json();
        cityName.innerHTML = data.name;
        temprature.innerHTML = Math.round(data.main.temp)+"°C";
        humidity.innerHTML = data.main.humidity+"%";
        wind.innerHTML = Math.round(data.wind.speed)+" Km/h"

        if(data.weather[0].main=='Clouds'){
            weatherIcon.src="assets/clouds.png";
        }
        else if(data.weather[0].main=='Clear'){
            weatherIcon.src = "assets/clear.png"
        }
        else if(data.weather[0].main=='Drizzle'){
            weatherIcon.src = "assets/drizzle.png"
        }
        else if(data.weather[0].main=='Rain'){
            weatherIcon.src = "assets/rain.png"
        }
        else if(data.weather[0].main=='Mist'){
            weatherIcon.src = "assets/mist.png"
        }
        errorBox.setAttribute('style','display:none');
        weatherContainer.setAttribute('style','display:block');
    }

}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
    weatherContainer.setAttribute('style','display:block');
})