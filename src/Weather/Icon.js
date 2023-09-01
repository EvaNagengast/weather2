import React, { useState } from "react";

export default function Icon(props) {
  console.log(props.info.data.weather[0].icon);
  let [icon, setIcon] = useState("");



  return <div>{icon}</div>;
}
