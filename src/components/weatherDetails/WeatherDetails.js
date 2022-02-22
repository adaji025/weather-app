import React, { useEffect, useState } from "react";
import "./WeatherDetails.css";

const WeatherDetails = (
 { temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,}
) => {
  const [weatherState, setWheatherState] = useState('')

  let sec = sunset
  let date = new Date(sec * 1000)
  let timeStr = `${date.getHours()}:${date.getMinutes()}`

  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case 'Clouds':
          setWheatherState('wi-day-cloudy')
          break;
        case 'Haze':
          setWheatherState('wi-fog')
          break;
        case 'Clear':
          setWheatherState('wi-day-sunny')
          break;
        case 'Mists':
          setWheatherState('wi-dust')
          break;
        case 'Rain':
          setWheatherState('wi-day-rain')
          break;
        default:
          setWheatherState('wi-day-sunny')
      }
    }
  },[weatherType])
  return (
    <div>
      <div className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temp fs-32">{temp}&deg;</div>
          <div className="description">
            <div className="condition fs-32">{weatherType}</div>
            <div className="location">{name}, {country}</div>
          </div>
          <div className="date">{new Date().toLocaleString()}</div>
        </div>
        <div className="extra-info">
          <div className="min-max-temp">
            <div className="min-max-info">
              <p>
                <i className="wi wi-day-sunny"></i>
              </p>
              <p className="sun-set">
                {timeStr}pm <br /> sunset
              </p>
            </div>
          </div>
          <div className="min-max-temp">
            <div className="min-max-info">
              <p>
                <i className="wi wi-humidity"></i>
              </p>
              <p className="sun-set">
                {humidity} <br /> Humidity
              </p>
            </div>
          </div>
          <div className="min-max-temp">
            <div className="min-max-info">
              <p>
                <i className="wi wi-rain"></i>
              </p>
              <p className="sun-set">
                {pressure} <br /> Pressure
              </p>
            </div>
          </div>
          <div className="min-max-temp">
            <div className="min-max-info">
              <p>
                <i className="wi wi-strong-wind"></i>
              </p>
              <p className="sun-set">
                {speed} <br /> Speed wind
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
