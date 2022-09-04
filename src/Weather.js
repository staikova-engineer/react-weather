import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    })
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
    function search() {
      const apiKey = "f37ae7e0407a8ea1d736a1fcc1e6133a";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                autoComplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" 
              value="Search" 
              className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <WeatherInfo date={weatherData} />
        </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
