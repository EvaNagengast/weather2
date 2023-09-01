import React, { useState } from "react";
export default function City(props) {
  console.log(props.info.data.name);
  return <div>{props.info.data.name}</div>;
}
