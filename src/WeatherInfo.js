import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
    <div className="row weather-row">
    <div className="col image">
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt={props.date.description}
      />
    </div>
    <div className="col temperature">
      <p> <span className="number">{Math.round(props.date.temperature)}</span> <span className="degrees"><a href="www.shecodes.io" className="degress">ºC</a> | <a href="www.shecodes.io" className="fahrenheit">ºF</a></span></p>
    </div>
    <div className="col characteristics">
      <ul>
        <li>Humidity: {props.date.humidity} %</li>
        <li>Wind: {Math.round(props.date.wind)} m/s</li>
      </ul>
    </div>
    <div className="col city text-end">
      <h1>{props.date.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.date.date} />
        </li>
        <li>{props.date.description}</li>
      </ul>
    </div>
  </div>
  </div>
  )
}