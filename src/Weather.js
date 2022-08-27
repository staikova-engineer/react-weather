import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: `Sunday 12:00`,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
      icon: response.data.weather[0].icon,
    })
  }
 
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <div className="row weather-row">
          <div className="col image">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt={weatherData.description}
            />
          </div>
          <div className="col temperature">
            <p> <span className="number">{Math.round(weatherData.temperature)}</span> <span className="degrees"><a href="#" className="degress">ºC</a> | <a href="#" className="fahrenheit">ºF</a></span></p>
          </div>
          <div className="col characteristics">
            <ul>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {Math.round(weatherData.wind)} m/s</li>
            </ul>
          </div>
          <div className="col city text-end">
            <h1>{weatherData.city}</h1>
            <ul>
              <li>{weatherData.date}</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
        </div>
        </div>
    );
  } else {
  const apiKey = "f37ae7e0407a8ea1d736a1fcc1e6133a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

  return "Loading...";
}
