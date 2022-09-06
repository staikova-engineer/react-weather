import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row weather-row">
        <div className="col-4 temperature">
          <div className="d-flex">
            <div>
              <WeatherIcon code={props.date.icon} size={40} />
            </div>

            <div>
              {" "}
              <WeatherTemp celsius={props.date.temperature} />
            </div>
          </div>
        </div>
        <div className="col-4 characteristics">
          <ul>
            <li>Humidity: {props.date.humidity} %</li>
            <li>Wind: {Math.round(props.date.wind)} m/s</li>
          </ul>
        </div>
        <div className="col-4 city text-end">
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
  );
}
