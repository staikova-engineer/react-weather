import React from "react";
import "./Weather";

import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer>This react project was coded by <a href="https://www.linkedin.com/in/anna-staikova-engineer/" target="_blank">Anna Staikova</a> and is <a href="https://github.com/staikova-engineer/react-weather-app" target="_blank">open-sourced</a> on GitHub</footer>
    </div>
  );
}
