//OpenWeatherAPI 
//Credentials: {"username": "fasite@net1mail.com", "password": "test@123"}
class Weather {
    constructor(city, countryCode) {
        this.apikey = '5bd32a246c4ac68a9965b75a2d5a22b1';
        this.city = city;
        this.countryCode = countryCode;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&APPID=${this.apikey}&units=metric`);
        const responseData = await response.json();
        return responseData;
    }

    // Change location
    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }
}
