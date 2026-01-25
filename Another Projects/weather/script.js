let weather = {
  countries_weather: [
    {
      country: "Uzbekistan",
      city: "Tashkent",
      temperature: 10,
      feels_like: 9,
      humidity: 58,
      wind_kph: 12,
      condition: "Qisman bulutli",
    },
    {
      country: "Kazakhstan",
      city: "Astana",
      temperature: -2,
      feels_like: -5,
      humidity: 65,
      wind_kph: 18,
      condition: "Bulutli",
    },
    {
      country: "Turkey",
      city: "Ankara",
      temperature: 12,
      feels_like: 11,
      humidity: 60,
      wind_kph: 10,
      condition: "Quyoshli",
    },
    {
      country: "Russia",
      city: "Moscow",
      temperature: 3,
      feels_like: -1,
      humidity: 72,
      wind_kph: 14,
      condition: "Yomg‘ir",
    },
    {
      country: "United States",
      city: "Washington D.C.",
      temperature: 9,
      feels_like: 7,
      humidity: 55,
      wind_kph: 8,
      condition: "Ochiq osmon",
    },
    {
      country: "Japan",
      city: "Tokyo",
      temperature: 16,
      feels_like: 16,
      humidity: 70,
      wind_kph: 9,
      condition: "Yengil yomg‘ir",
    },
    {
      country: "France",
      city: "Paris",
      temperature: 11,
      feels_like: 10,
      humidity: 68,
      wind_kph: 13,
      condition: "Bulutli",
    },
    {
      country: "United Kingdom",
      city: "London",
      temperature: 8,
      feels_like: 6,
      humidity: 80,
      wind_kph: 15,
      condition: "Tumanli",
    },
    {
      country: "India",
      city: "New Delhi",
      temperature: 25,
      feels_like: 26,
      humidity: 50,
      wind_kph: 9,
      condition: "Quyoshli",
    },
    {
      country: "China",
      city: "Beijing",
      temperature: 6,
      feels_like: 5,
      humidity: 59,
      wind_kph: 11,
      condition: "Qisman bulutli",
    },
  ],
};

function searchWeather(e) {
  e.preventDefault();

  let inputValue = e.target[0].value.toLowerCase();

  let found = weather.countries_weather.find(
    (item) =>
      item.country.toLowerCase() === inputValue ||
      item.city.toLowerCase() === inputValue
  );

  if (found) {
    showWeather(found);
  } else {
    document.getElementById("show").innerHTML = "<h2>Not found</h2>";
  }
}

function showWeather(data) {
  document.getElementById("show").innerHTML = `
    <div class="info">
      <h1>${data.city}, ${data.country}</h1>
      <p>Temperature: ${data.temperature}°C</p>
      <p>Feels like: ${data.feels_like}°C</p>
      <p>Humidity: ${data.humidity}%</p>
      <p>Wind: ${data.wind_kph}kph</p>
      <p>Condition: ${data.condition}</p>
    </div>
  `;
}
