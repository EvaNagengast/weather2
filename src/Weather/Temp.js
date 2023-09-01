import React, { useState } from "react";
export default function Temp(props) {

  return <div>{Math.round(props.info.data.main.temp)}</div>;
}
