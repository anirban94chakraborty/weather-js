// Init Storage Object
const storage = new Storage();

// Get Stored Location Data
const weatherLocation = storage.getLocationData();

// Init Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.countryCode);

// Init UI Object
const ui = new UI();

// Get Weather on DOM Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city');
    const countryCode = document.getElementById('countryCode');
    weather.changeLocation(city.value, countryCode.value);
    // Get and Display Weather Again
    getWeather();
    // Close modal
    $('#locModal').modal('hide');
    // Clear Text Fields
    city.value = '';
    countryCode.value = '';
});

function getWeather() {
    weather.getWeather()
        .then(responseData => {
            ui.draw(responseData);
            storage.setLocationData(responseData.name, responseData.sys.country);
        })
        .catch(error => console.log(error));
}

// Refresh Weather Details after every 1 minute
window.setInterval(getWeather, 60000);