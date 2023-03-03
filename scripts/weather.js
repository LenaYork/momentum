let cityInput = document.querySelector("#city-input");
const initialCity = "London";
let cityName = localStorage.getItem("cityName") ?? initialCity;
cityInput.value = cityName;
const weatherContainer = document.querySelector(".weather-container");
const errorTag = document.querySelector(".weather-error");
const APIKey = "ac1d77b4f3dd4eacb770a6830a8abd60";

showWeather();

cityInput.addEventListener("change", (event) => {
        cityName = cityInput.value;
        if (cityInput.value != "") {
            localStorage.setItem("cityName", cityName);
            errorTag.innerHTML = "";
            showWeather();
        } else {
            clearWeatherContainer();
            errorTag.innerHTML = "Oops! City name input cannot be empty or something went wrong. Please try again later";
        }
})

function showWeather() {
    fetch(`https://api.weatherbit.io/v2.0/current?key=${APIKey}&lang=en&city=${cityName}`)
    .then(resp => resp.json())
    .then(arr => {
        cityName = arr.data[0].city_name;
        cityInput.value = cityName;
        localStorage.setItem("cityName", cityName);

        clearWeatherContainer();
        
        const weatherDescription = arr.data[0].weather.description; 
        const temp =  Math.round(arr.data[0].temp); //temperature (default Celsius).
        const wind = arr.data[0].wind_cdir_full + " " + Math.round(arr.data[0].wind_spd); //Wind speed (Default m/s).
        const weatherIcon = `./assets/weatherIcons/${arr.data[0].weather.icon}.png`;
        const humidity = Math.round(arr.data[0].rh) // relative humidity % 
        
        const weatherIconTag = document.createElement("img");
        weatherIconTag.setAttribute("class", "weather-icon");
        weatherIconTag.setAttribute("alt", "weatherDescription");
        
        const weatherDescriptionTag = document.createElement("p")
        weatherDescriptionTag.setAttribute("class","weather-description");
        const tempTag = document.createElement("p");
        tempTag.setAttribute("class", "temp");
        const windTag = document.createElement("p");
        windTag.setAttribute("class", "wind");
        const humidityTag = document.createElement("p");
        humidityTag.setAttribute("class", "humidity");

        const iconsContainer = document.createElement("div");
        iconsContainer.setAttribute("class", "icons-container");
        weatherContainer.append(iconsContainer);
        iconsContainer.append(tempTag, weatherIconTag);

        weatherContainer.append(weatherDescriptionTag, windTag, humidityTag);
        weatherDescriptionTag.innerHTML = weatherDescription;
        tempTag.innerHTML = temp + " °C" ; 
        windTag.innerHTML = "Wind: " + wind + " m/s";
        humidityTag.innerHTML = "Humidity: " + humidity + "%";
        weatherIconTag.setAttribute("src", weatherIcon);
    })
    .catch((error) => {
        clearWeatherContainer();
        errorTag.innerHTML = "Oops! Unknown city or something went wrong. Please try again later"
        console.log("error!", error);
        localStorage.setItem("cityName", "London");
    })
}

function clearWeatherContainer() {
    while(weatherContainer.firstChild) {
        weatherContainer.removeChild(weatherContainer.firstChild);
    }
}