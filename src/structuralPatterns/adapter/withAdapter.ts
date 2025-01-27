// Simulação de uma API externa que retorna temperatura em Kelvin
class WeatherAPI {
    getTemperature(): number {
        return 300; // Retorna temperatura em Kelvin
    }
}

// Criamos um Adapter que converte a temperatura automaticamente
class WeatherAdapter {
    private weatherAPI: WeatherAPI;

    constructor(weatherAPI: WeatherAPI) {
        this.weatherAPI = weatherAPI;
    }

    getTemperatureInCelsius(): number {
        const tempKelvin = this.weatherAPI.getTemperature();
        return tempKelvin - 273.15; // Conversão ocorre dentro do Adapter
    }
}

// Aplicação principal, que agora recebe Celsius sem precisar converter
class WeatherApp {
    private weatherAdapter: WeatherAdapter;

    constructor(weatherAdapter: WeatherAdapter) {
        this.weatherAdapter = weatherAdapter;
    }

    showTemperature(): void {
        const tempCelsius = this.weatherAdapter.getTemperatureInCelsius();
        console.log(`A temperatura atual é ${tempCelsius.toFixed(2)}°C.`);
    }
}

// Uso da aplicação com Adapter
const api = new WeatherAPI();
const adapter = new WeatherAdapter(api);
const app = new WeatherApp(adapter);
app.showTemperature();
