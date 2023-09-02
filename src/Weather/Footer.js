import React from "react";
import "./Footer.css"
export default function Footer() {
  return (
    <p>
      Coded with love by{" "}
      <a
        href="https://www.linkedin.com/in/eva-nagengast-9b78b220a"
        className="contactlink"
        title="personal linkedin profile"
        target="_blank"
      >
        Eva Nagengast
      </a>{" "}
      | This project is open sourced on{" "}
      <a
        href="https://github.com/EvaNagengast/weather2"
        className="gitHub"
        title="Git hub contact"
        target="_blank"
      >
        GitHub
      </a>
    </p>
  );
}
