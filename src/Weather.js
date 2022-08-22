import React from "react";
import "./Weather.css";

export default function Weather() {
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
            alt="sunny weather"
          />
        </div>
        <div className="col temperature">
          <p> <span className="number">26</span> <span className="degrees"><a href="#" className="degress">ºC</a> | <a href="#" className="fahrenheit">ºF</a></span></p>
        </div>
        <div className="col characteristics">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 39%</li>
            <li>Wind: 2 m/s</li>
          </ul>
        </div>
        <div className="col city text-end">
          <h1>New York</h1>
          <ul>
            <li>Sunday 12:00</li>
            <li>Sunny</li>
          </ul>
        </div>
      </div>
      </div>
      
  );
}
