import testImg from "../../images/clouds.png";

import React from "react";
import ValueRow from "../../base/ValueRow";
import Forecast from "./Forecast";

export default function RightSide() {
  return (
    <>
      <span class="weather-tab-container blur"></span>
      <main class="weather-tab-container">
        <section class="weather-details-container">
          <p id="weather-details">Weather Details...</p>
        </section>

        <Forecast>
          <ValueRow parameter={"Temp max"} value={"25"} image={testImg} />
          <ValueRow parameter={"Temp max"} value={"25"} image={testImg} />
          <ValueRow parameter={"Temp max"} value={"25"} image={testImg} />
          <ValueRow parameter={"Temp max"} value={"25"} image={testImg} />
        </Forecast>

        <section class="weather-container">
          <heading class="weather-forecast-container">
            <h4 id="weather-details">Today's Weather Forecast...</h4>
          </heading>
          <div class="line" id="line1">
            <img src="images/Snow.png" alt="snowflake" class="weather-img" />
            <div class="hour-weather">
              <p id="current-time">
                09:00
                <br />
              </p>
              <br />
              <p id="weather-description">Snow</p>
            </div>
            <p class="forecast-temp">19°</p>
          </div>
        </section>
        <script src="index.js"></script>
      </main>
    </>
  );
}
