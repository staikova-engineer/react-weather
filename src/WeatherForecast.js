import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row WeatherForecast">
        <div className="col">
          <ForecastDay data={forecast[0]} />
        </div>
      </div>
    );
  } else {
    let lat = 59.437;
    let lon = 24.7536;
    let units = "metric";
    let apiKey = "f37ae7e0407a8ea1d736a1fcc1e6133a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
