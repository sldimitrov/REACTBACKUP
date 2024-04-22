import React from "react";
import ValueRow from "../../base/ValueRow";

export default function RightSide() {
  return (
    <>
      <span class="weather-tab-container blur"></span>
      <main class="weather-tab-container">
        <section class="weather-details-container">
          <p id="weather-details">Weather Details...</p>
        </section>
        <section class="forecast-container">
          <heading id="forecast-heading-container">
            <h4 id="forecast-heading">THUNDERSTORM WITH LIGHT DRIZZLE</h4>
          </heading>
          <ValueRow parameter={"Temp max"} value={"25"} image={"image"} />
          <div class="row">
            <p class="w-characteristics">Temp min</p>
            <p id="temp-min">15°</p>
            <img src="images/cold_thernometer.png" alt="cold" />
          </div>
          <div class="row">
            <p class="w-characteristics">Humadity</p>
            <p id="humidity">58%</p>
            <img src="images/waterdrop.png" alt="waterdrop" />
          </div>
          <div class="row">
            <p class="w-characteristics">Cloudy</p>
            <p id="cloudy">86%</p>
            <img src="images/cloudy.png" alt="cloudy" />
          </div>
          <div class="row">
            <p class="w-characteristics">Wind</p>
            <p id="wind">5km/h</p>
            <img src="images/wind.png" alt="windy" />
          </div>
          <span class="blank-line" id="blank-container"></span>
        </section>
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
