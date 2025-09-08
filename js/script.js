const baseUrl = "http://api.weatherapi.com/v1";
const API_KEY = "3939fa7cebfc4660827102611252107";
const place = "Brisbane";

const serachButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

const fetchWeather = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to Fetch weather data");
    }

    const data = await response.json();
    console.log(data);

    const country = data.location.country;
    console.log("country = ", country);
    const city = data.location.name;
    console.log("city = ", city);

    const region = data.location.region;
    console.log("region = ", region);

    const timeZone = data.location.tz_id;
    console.log("time zone = ", timeZone);

    const localTime = data.location.localtime;
    console.log("local time = ", localTime);
    const temperature = data.current.temp_c;
    console.log("temperature = ", temperature);
    const humidity = data.current.humidity;
    console.log("humidity = ", humidity);
    const windSpeed = data.current.wind_kph;
    console.log("wind speed = ", windSpeed);

    const weatherCondition = data.current.condition.text;
    console.log("weather conditions = ", weatherCondition);

    // Using includes to catch variations like "Sunny" or "Clear"
    if (weatherCondition) {
      if (weatherCondition.includes("Clear")) {
        document.body.style.backgroundImage =
          "url('assets/weather-conditions/clear.jpg')";
      } else if (weatherCondition.includes("Sunny")) {
        document.body.style.backgroundImage =
          "url('assets/weather-conditions/sunny.jpg')";
      } else if (
        weatherCondition.includes("Partly cloudy") ||
        weatherCondition.includes("Overcast")
      ) {
        document.body.style.backgroundImage =
          "url('assets/weather-conditions/cloudy.jpg')";
      } else if (
        weatherCondition.includes("Rain") ||
        weatherCondition.includes("Drizzle")
      ) {
        document.body.style.backgroundImage =
          "url('assets/weather-conditions/rainy.jpg')";
      } else if (
        weatherCondition.includes("Snow") ||
        weatherCondition.includes("Freezing")
      ) {
        document.body.style.backgroundImage =
          "url('assets/weather-conditions/snow.jpg')";
      } else if (
        weatherCondition.includes("Thunder") ||
        weatherCondition.includes("Storm")
      ) {
        document.body.style.backgroundImage =
          "url('assets/weather-conditions/storm.jpg')";
      } else if (weatherCondition.includes("Wind")) {
        document.body.style.backgroundImage =
          "url('assets/weather-conditions/windy.jpg')";
      } else {
        // Default background
        document.body.style.backgroundImage =
          "url('assets/weather-conditions/default.jpg')";
      }

      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
    }

    //DOM
    const cityNameEl = document.querySelector(".city-name");
    cityNameEl.textContent = `City: ${city}`;

    const countryEl = document.querySelector(".country");
    countryEl.textContent = `Country: ${country}`;

    const regionEl = document.querySelector(".region");
    regionEl.textContent = `Region: ${region}`;

    const timeZoneEl = document.querySelector(".timeZone");
    timeZoneEl.textContent = `Time Zone: ${timeZone}`;

    const localTimeEl = document.querySelector(".localTime");
    localTimeEl.textContent = `Local Time: ${localTime}`;

    const temperatureEl = document.querySelector(".temperature");
    temperatureEl.textContent = `Temperature: ${temperature}`;

    const humidityEl = document.querySelector(".humidity");
    humidityEl.textContent = `Humidity: ${humidity}`;

    const windspeedEl = document.querySelector(".wind-speed");
    windspeedEl.textContent = `Wind Speed: ${windSpeed}`;

    const weatherConditonEl = document.querySelector(".weatherCondition");
    windspeedEl.textContent = `Weather Condition: ${weatherCondition}`;

    //      🔎 Search for current weather by city name
    // - 🌡️ Displays temperature, humidity, wind speed, and weather conditions
    // - 📍 Option to use geolocation for weather at your current location _(optional enhancement)_
    // - ⚠️ Handles invalid or misspelled city names gracefully
    // - 📱 Responsive design for both desktop and mobile
  } catch (error) {
    console.log(error);
  }
};

fetchWeather(`${baseUrl}/current.json?key=${API_KEY}&q=${place}`);
document.getElementById("btnSearch").addEventListener("click", function () {
  //get place name [city name from user input]
  const searchInput = document.getElementById("placeName").value.trim();
  const searchedCity = searchInput || place;
  const apiEP = `${baseUrl}/current.json?key=${API_KEY}&q=${searchedCity}`;
  fetchWeather(apiEP);
});
