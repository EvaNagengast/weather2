

import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {

const weatherIcons = {
  "01d": {
    icon: "CLEAR_DAY",
    color: "yellow",
  },
  "01n": {
    icon: "CLEAR_NIGHT",
    color: "yellow",
  },
  "02d": {
    icon: "PARTLY_CLOUDY_DAY",
    color: "yellow",
  },
  "02n": {
    icon: "PARTLY_CLOUDY_NIGHT",
    color: "yellow",
  },
  "03d": {
    icon: "CLOUDY",
    color: "rgb(255, 246, 230)",
  },
  "03n": {
    icon: "CLOUDY",
    color: "rgb(255, 246, 230)",
  },
  "04d": {
    icon: "CLOUDY",
    color: "rgb(255, 246, 230)",
  },
  "04n": {
    icon: "CLOUDY",
    color: "rgb(255, 246, 230)",
  },
  "09d": {
    icon: "RAIN",
    color: "darkblue",
  },
  "09n": {
    icon: "RAIN",
    color: "darkblue",
  },
  "10d": {
    icon: "RAIN",
    color: "darkblue",
  },
  "10n": {
    icon: "RAIN",
    color: "darkblue",
  },
  "11d": {
    icon: "WIND",
    color: "red",
  },
  "11n": {
    icon: "WIND",
    color: "red",
  },
  "13d": {
    icon: "SNOW",
    color: "rgb(255, 246, 230)",
  },
  "13n": {
    icon: "SNOW",
    color: "rgb(255, 246, 230)",
  },
  "50d": {
    icon: "FOG",
    color: "red",
  },
  "50n": {
    icon: "FOG",
    color: "red",
  },
};








  const iconNr = props.info.data.weather[0].icon;
  const iconInfo = weatherIcons[iconNr] ;

  return (
    <div>
      <ReactAnimatedWeather
        icon={iconInfo.icon } 
        color={iconInfo.color} 
        size={80}
        animate={true}
      />
    </div>
  );
}
