function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/forecaster';
    const locationElement = document.getElementById('location');
    const submitButton = document.getElementById('submit');
    const forecastElement = document.getElementById('forecast');
    const currentElement = document.getElementById('current');
    const upcomingElement = document.getElementById('upcoming');

    const weatherSymbol = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°'
    }

    submitButton.addEventListener('click', () => {
        fetch(`${baseURL}/locations`)
            .then(res => res.json())
            .then(locationData => {
                const { code } = locationData.find(location => location.name === locationElement.value);

                return Promise.all([
                    fetch(`${baseURL}/today/${code}`),
                    fetch(`${baseURL}/upcoming/${code}`)
                ]);
            })
            .then(responses => Promise.all(responses.map(res => res.json())))
            .then(([today, upcoming]) => {
                forecastElement.style.display = 'block';
                const symbolSpanElement = document.createElement('span');
                symbolSpanElement.textContent = weatherSymbol[today.forecast.condition];
                symbolSpanElement.classList.add('condition');
                symbolSpanElement.classList.add('symbol');

                const anotherSpan = document.createElement('span');
                anotherSpan.innerHTML = `
                    <span class="condition">
                        <span class="forecast-data">${today.name}</span>
                        <span class="forecast-data">${today.forecast.low}°/${today.forecast.high}°</span>
                        <span class="forecast-data">${today.forecast.condition}</span>
                    </span>
                `;

                const forecastsElement = document.createElement('div');
                forecastsElement.classList.add('forecasts');
                forecastsElement.appendChild(symbolSpanElement);
                forecastsElement.appendChild(anotherSpan);
                currentElement.appendChild(forecastsElement);

                /*const upcomingSpan = document.createElement('div');
                upcomingSpan.innerHTML = `<div class="forecast-info">
                        <span class="upcoming">
                            <span class="symbol">${upcoming[0]}</span>
                            <span class="forecast-data"><${upcoming.low}°/${upcoming.high}°/span>
                            <span class="forecast-data"></span>
                        </span>
                        <span class="upcoming">
                            <span class="symbol"></span>
                            <span class="forecast-data"></span>
                            <span class="forecast-data"></span>
                        </span>
                        <span class="upcoming">
                            <span class="symbol"></span>
                            <span class="forecast-data"></span>
                            <span class="forecast-data"></span>
                        </span>
                    </div>
                `;*/
            })
            .catch(() => console.log('Error'));

    })
}

attachEvents();