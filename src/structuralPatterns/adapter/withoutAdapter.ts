// Simulação de uma API externa que retorna temperatura em Kelvin
class WeatherAPI {
    getTemperature(): number {
        return 300; // Retorna temperatura em Kelvin
    }
}

// Aplicação principal que precisa da temperatura em Celsius
class WeatherApp {
    private weatherAPI: WeatherAPI;

    constructor(weatherAPI: WeatherAPI) {
        this.weatherAPI = weatherAPI;
    }

    showTemperature(): void {
        const tempKelvin = this.weatherAPI.getTemperature();
        const tempCelsius = tempKelvin - 273.15; // Conversão manual para Celsius
        console.log(`A temperatura atual é ${tempCelsius.toFixed(2)}°C.`);
    }
}

// Uso da aplicação
const api = new WeatherAPI();
const app = new WeatherApp(api);
app.showTemperature();
