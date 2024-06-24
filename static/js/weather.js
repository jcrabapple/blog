document.addEventListener('DOMContentLoaded', (event) => {
    const apiKey = '6077287c07c1f075d8cb329546acf918';
    const city = '4794120';
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temp = Math.round(data.main.temp);  // Rounding the temperature
            const description = data.weather[0].description;
            const weatherElement = document.getElementById('weather');

            // Determine the icon
            let icon = '';
            if (description.includes('sun')) {
                icon = '<i class="ph-bold ph-sun"></i>';
            } else if (description.includes('cloud')) {
                icon = '<i class="ph-bold ph-cloud"></i>';
            }

            weatherElement.innerHTML = `${icon} <strong>Current weather in Winchester, VA:</strong> ${temp}°F, ${description}`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});
