import React from "react";
import "./Weather";

import Weather from "./Weather";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tallinn" />
      </div>
      <footer>
        This react project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/anna-staikova-engineer/"
          target="_blank"
          rel="noreferrer"
        >
          Anna Staikova
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/staikova-engineer/react-weather"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced
        </a>{" "}
        on GitHub and hosted on{" "}
        <a
          href="https://creative-youtiao-d48ab9.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
