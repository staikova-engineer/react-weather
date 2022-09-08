import React from "react";
import axios from "axios";

import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let lat = 59.437;
  let lon = 24.7536;
  let apiKey = "f37ae7e0407a8ea1d736a1fcc1e6133a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="row WeatherForecast">
      <div className="col">
        <div className="WeatherForecast-day">Mon</div>
        <WeatherIcon code="01d" size={33} />
        <div className="WeatherForecast-temp">
          <span className="WeatherForecast-temp-max">12˚</span>
          <span className="WeatherForecast-temp-min">7˚</span>
        </div>
      </div>
    </div>
  );
}
