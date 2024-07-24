
(async function() {
    const apiKey = '4f07092e0bdcb1769c2240fc0fc8a7da';
    const city = 'Dnipro';

    async function getWeather() {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (response.ok) {
                renderWeatherData({
                    location: `${data.name}, ${data.sys.country}`,
                    temperature: `${Math.round(data.main.temp)}°C`,
                    description: `Weather: ${data.weather[0].description}`,
                    humidity: `Humidity: ${data.main.humidity}%`,
                    pressure: `Pressure: ${data.main.pressure} hPa`,
                    wind: `Wind: ${data.wind.speed} m/s`
                });
            } else {
                renderWeatherData();
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            renderWeatherData();
        }
    }

    function renderWeatherData({
                                   location = 'City not found',
                                   temperature = '',
                                   description = '',
                                   humidity = '',
                                   pressure = '',
                                   wind = ''
                               } = {}) {
        document.getElementById('location').textContent = location;
        document.getElementById('temperature').textContent = temperature;
        document.getElementById('description').textContent = description;
        document.getElementById('humidity').textContent = humidity;
        document.getElementById('pressure').textContent = pressure;
        document.getElementById('wind').textContent = wind;
    }

    // Ініціалізуємо погоду при завантаженні сторінки
    getWeather();

    // Встановлюємо глобальну функцію для оновлення
    window.getWeather = getWeather;
})();
