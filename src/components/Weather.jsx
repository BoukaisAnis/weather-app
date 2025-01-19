import React, { useState } from 'react';
import { getWeather } from '../api/weatherAPI';
import '../App.css';  // We'll style the component here or use CSS-in-JS
import { FaCloudRain } from "react-icons/fa";
import { TbTemperatureSnow } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { VscDebugBreakpointConditional } from "react-icons/vsc";

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!city) return;
    try {
      const data = await getWeather(city);
      setWeatherData(data);
      setError('');
    } catch (error) {
      setError('City not found or API issue');
      setWeatherData(null);
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather App  <FaCloudRain />  </h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <div className="error">{error}</div>}

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p><TbTemperatureSnow /> 
            Temperature: {weatherData.main.temp}°C</p>
          <p><WiHumidity />
            Humidity: {weatherData.main.humidity}%</p>
          <p><VscDebugBreakpointConditional />
            Condition: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
