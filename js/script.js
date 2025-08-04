const baseUrl = "http://api.weatherapi.com/v1";
const API_KEY = "3939fa7cebfc4660827102611252107";
const place = "Brisbane";
const apiEP = baseUrl + `/current.json?key=${API_KEY}&q=${place}`;

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
    console.log("wind speed = ", humidity);

    const weatherCondition = data.current.condition.text;
    console.log("weather conditions = ", weatherCondition);
    //      🔎 Search for current weather by city name
    // - 🌡️ Displays temperature, humidity, wind speed, and weather conditions
    // - 📍 Option to use geolocation for weather at your current location _(optional enhancement)_
    // - ⚠️ Handles invalid or misspelled city names gracefully
    // - 📱 Responsive design for both desktop and mobile
  } catch (error) {
    console.log(error);
  }
};
fetchWeather(apiEP);
