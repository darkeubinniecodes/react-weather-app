import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li>Wednesday 15:00</li>
        <li>Light Rain</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="Light Rain"
          />
          6º
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:55%</li>
            <li>Humidity: 94%</li>
            <li>Wind: 8km/h</li>
          </ul>
        </div>
      </div>
      Hello from Weather
    </div>
  );
}
