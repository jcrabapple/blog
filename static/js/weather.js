document.addEventListener('DOMContentLoaded', (event) => {
    const apiKey = '6077287c07c1f075d8cb329546acf918';
    const city = '4794120';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const weatherElement = document.getElementById('weather');
            weatherElement.innerHTML = `Current weather in Winchester, VA: ${temp}°F, ${description}`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
