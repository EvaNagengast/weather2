import React, { useState } from "react";
import "./Temp.css";
export default function Temp(props) {
  const [temperature, setTemperature] = useState(
    Math.round(props.info.data.main.temp)
  );

  function setFahrenheit() {
    const fahrenheit =Math.round(props.info.data.main.temp * 1.8+32) 
    setTemperature(`${fahrenheit}°F`);
  }

  function setCelsius() {
    const celsius = Math.round(props.info.data.main.temp)
    setTemperature(`${celsius}°C`);
  }
  return (
    <div className="temp">
      <div>{temperature}</div>

      <div>
        <button onClick={setCelsius}>Celsius</button>

        <button onClick={setFahrenheit}>Fahrenheit</button>
      </div>
    </div>
  );
}
