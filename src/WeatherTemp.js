import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <p className="WeatherTemp">
        <span className="number">{Math.round(props.celsius)}</span>{" "}
        <span className="units">
          ºC |{" "}
          <a href="/" className="fahrenheit" onClick={convertToFahrenheit}>
            ºF
          </a>
        </span>
      </p>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <p className="WeatherTemp">
        <span className="number">{Math.round(fahrenheit)}</span>{" "}
        <span className="units">
          <a href="/" className="celsius" onClick={convertToCelsius}>
            ºC{" "}
          </a>
          | ºF
        </span>
      </p>
    );
  }
}
