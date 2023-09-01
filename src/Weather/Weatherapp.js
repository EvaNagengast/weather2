import React, { useState } from "react";
import City from "./City"
import axios from "axios";
import "./Weatherapp.css";

export default function Weatherapp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  function updateInput(input) {
 
    setCity(input.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "a5c55c774ac8198c087358853c4a79a9";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(weatherResponse) {


    setWeather(weatherResponse);
  }

  return (
    <div className="wrapper">
      <div className="city"><City info={weather}/> </div>
      <div className="icon">icon</div>
      <div className="temp">temp</div>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={updateInput}></input>
          <br />
          <button type="submit">search</button>
          <button type="submit">pin</button>
        </form>
      </div>
      <div className="celsiusfahrenheit">celsiusfahrenheit</div>
      <div className="text">text</div>
      <div className="forecast">forecast</div>
      <div className="footer">footer</div>
    </div>
  );
}
