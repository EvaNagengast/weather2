import React, { useState, useEffect } from "react";
import "./Forecast.css";
export default function Forecast(props) {
  let wind = props.info.data.wind.speed;
  let humid = props.info.data.main.humidity;

  const [feeltemperature, setFeeltemperature] = useState(
    props.info.data.main.feels_like
  );
  const [celsiuslogo, setCelsiuslogo] = useState(
    <a href="#" className="celsiusLinkactive" onClick={setCelsius}>
      °C
    </a>
  );
  const [fahrenheitlogo, setFahrenheitlogo] = useState(
    <a href="#" className="fahrenheitLink" onClick={setFahrenheit}>
      °F
    </a>
  );

  useEffect(() => {
    setFeeltemperature(Math.round(props.info.data.main.feels_like));
  }, [props.info.data.main.feels_like]);

  useEffect(() => {
    setCelsiuslogo(
      <a href="#" className="celsiusLinkactive" onClick={setCelsius}>
        °C
      </a>
    );
  }, [props.info.data.main.feels_like]);


    useEffect(() => {
      setFahrenheitlogo(
        <a href="#" className="fahrenheitLink" onClick={setCelsius}>
          °F
        </a>
      );
    }, [props.info.data.main.feels_like]);

  function setFahrenheit() {
    const fahrenheit = Math.round(props.info.data.main.feels_like * 1.8 + 32);
    setFeeltemperature(fahrenheit);
    setCelsiuslogo(
      <a href="#" className="celsiusLink" onClick={setCelsius}>
        °C
      </a>
    );
    setFahrenheitlogo(
      <a href="#" className="fahrenheitLinkactive" onClick={setFahrenheit}>
        °F
      </a>
    );
  }

  function setCelsius() {
    const celsius = Math.round(props.info.data.main.feels_like);
    setFeeltemperature(<span>{celsius}</span>);
    setCelsiuslogo(
      <a href="#" className="celsiusLinkactive" onClick={setCelsius}>
        °C
      </a>
    );
    setFahrenheitlogo(
      <a href="#" className="fahrenheitLink" onClick={setFahrenheit}>
        °F
      </a>
    );
  }

  return (
    <div className="Forecast">
      feels like: {feeltemperature}
      {celsiuslogo}|{fahrenheitlogo}
      <br />
      wind: {wind} mph
      <br />
      humidity: {humid} %
    </div>
  );
}
