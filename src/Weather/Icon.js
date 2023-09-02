

import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {

const weatherIcons = {
  "01d": {
    icon: "CLEAR_DAY",
    color: "goldenrod",
  },
  "01n": {
    icon: "CLEAR_NIGHT",
    color: "orange",
  },
  "02d": {
    icon: "PARTLY_CLOUDY_DAY",
    color: "lightgrey",
  },
  "02n": {
    icon: "PARTLY_CLOUDY_NIGHT",
    color: "lightgrey",
  },
  "03d": {
    icon: "CLOUDY",
    color: "grey",
  },
  "03n": {
    icon: "CLOUDY",
    color: "grey",
  },
  "04d": {
    icon: "CLOUDY",
    color: "grey",
  },
  "04n": {
    icon: "CLOUDY",
    color: "grey",
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
    color: "yellow",
  },
  "11n": {
    icon: "WIND",
    color: "yellow",
  },
  "13d": {
    icon: "SNOW",
    color: "black",
  },
  "13n": {
    icon: "SNOW",
    color: "black",
  },
  "50d": {
    icon: "FOG",
    color: "blue",
  },
  "50n": {
    icon: "FOG",
    color: "blue",
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
