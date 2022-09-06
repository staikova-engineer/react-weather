import React from "react";

import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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
