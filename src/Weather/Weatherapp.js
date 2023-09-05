import React, { useState } from "react";
import City from "./City";
import Temp from "./Temp";
import Icon from "./Icon";
import Footer from "./Footer";
import Forecast from "./Forecast";
import axios from "axios";

import "./Weatherapp.css";

export default function Weatherapp() {
  const [load, setLoad] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  function updateInput(input) {
    setCity(input.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey =
      // "5101b1tb3fba4e5cedfo0b346a6ccc32";
      `4cc095d48157ba3cc2e7da6b0b98bc8a`;

    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    // `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(weatherResponse) {
    setLoad(true);

    setWeather(weatherResponse);
  }
  let form = (
    <form onSubmit={handleSubmit} className="cityUpdate">
      <input type="text" autoFocus onChange={updateInput}></input>
      <br />
      <button type="submit" className="searchButton">
        search
      </button>
    </form>
  );

  if (load) {
    return (
      <div className="wrapper">
        <div className="city">
          <City info={weather} />
        </div>
        <div className="icon">
          <Icon info={weather} />
        </div>
        <div className="temp">
          {" "}
          <Temp info={weather} />
        </div>
        <div className="search">{form}</div>

        <div className="text"></div>
        <div className="forecast">
          <Forecast info={weather} />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  } else {
    return (
      <div className="citysearch">
        <h1>Search your city</h1>
        <div>{form}</div>
      </div>
    );
  }
}
