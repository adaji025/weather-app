import React, { useEffect, useState } from "react";
import WeatherDetails from "../weatherDetails/WeatherDetails";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("Abuja");
  const [tempInfo, setTempInfo] = useState({});
  console.log(searchTerm);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=d5be6b9562da533db5d89242efbbc980`;

      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const newWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(newWeatherInfo)
    } catch (error) {
      console.log(error);
    }
  };

  // api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=d5be6b9562da533db5d89242efbbc980
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="search">
        <div className="searchContainer">
          <div className="searchInput">
            <input
              type="search"
              placeholder="type city name"
              id=" search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="searchBtn">
            <button onClick={getWeatherInfo}>Search city</button>
          </div>
        </div>
      </div>
      <WeatherDetails {...tempInfo}/>
    </>
  );
};

export default Search;
