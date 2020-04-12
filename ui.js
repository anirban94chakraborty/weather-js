class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.main = document.getElementById('w-main');
        this.description = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.cloud = document.getElementById('w-cloud');
        this.tempMinMax = document.getElementById('w-temp-min-max');
        this.wind = document.getElementById('w-wind');
        this.lastUpdated = document.getElementById('last-updated-on');
    }

    draw(weatherResult) {
        console.log(weatherResult);
        this.location.innerHTML = `${weatherResult.name} <img class="img img-fluid" src="http://openweathermap.org/images/flags/${(weatherResult.sys.country).toLowerCase()}.png"/>`;
        this.main.textContent = weatherResult.weather[0].main;
        this.description.textContent = `${weatherResult.weather[0].description}`;
        this.string.innerHTML = `${weatherResult.main.temp}&deg;C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weatherResult.weather[0].icon}@2x.png`);
        this.humidity.textContent = `Humidity : ${weatherResult.main.humidity}%`;
        this.cloud.textContent = `Cloudiness : ${weatherResult.clouds.all}%`;
        this.tempMinMax.innerHTML = `Min : ${weatherResult.main.temp_min}&deg;C | Max : ${weatherResult.main.temp_max}&deg;C`;
        this.wind.textContent = `Wind Speed : ${weatherResult.wind.speed} m/s`;
        this.lastUpdated.innerHTML = `<i>Last Updated On: ${(new Date()).toUTCString()}</i>`;
    }
}