

const apiKey = '4f07092e0bdcb1769c2240fc0fc8a7da';
const city = 'Dnipro';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
            document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('pressure').textContent = `Pressure: ${data.main.pressure} hPa`;
            document.getElementById('wind').textContent = `Wind: ${data.wind.speed} m/s`;
        } else {
            document.getElementById('location').textContent = 'City not found';
            document.getElementById('temperature').textContent = '';
            document.getElementById('description').textContent = '';
            document.getElementById('humidity').textContent = '';
            document.getElementById('pressure').textContent = '';
            document.getElementById('wind').textContent = '';
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

getWeather();
