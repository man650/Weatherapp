const apiKey = '4f505ef19b797f5abdc1bdff8ea86be2';

document.getElementById('search-button').addEventListener('click', () => {
    const city = document.getElementById('city-input').value.trim();
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
    }
}

function displayWeather(data) {
    const { name: cityName, main: { temp: temperature }, weather: [{ description }] } = data;
    const weatherInfo = `Current weather in ${cityName}: ${temperature}°C, ${description}`;
    document.getElementById('weather-info').innerText = weatherInfo;
}
