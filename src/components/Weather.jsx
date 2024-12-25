import React from "react";
import "./Weather.css";
import searchIcon from '../assets/search.png'
import clearIcon from '../assets/clear.png'
import cloudIcon from '../assets/cloud.png'
import drizzleIcon from '../assets/drizzle.png'
import snowIcon from '../assets/snow.png'
import windIcon from '../assets/wind.png'
import humidityIcon from '../assets/humidity.png'

const Weather = () => {
  return (
    <div className='weather'>
      <div className="search-bar">
        <input type="text" placeholder='Search'/>
        <img src = {searchIcon} alt = ""/>
      </div>
      <img src={clearIcon} alt = "" className = 'weather-icon'/>
      <p>16°C</p>
      <p>London</p>
    </div>
  );
};

export default Weather;
