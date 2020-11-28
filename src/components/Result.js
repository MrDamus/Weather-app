import React from 'react';
import './Result.css';
import './ResultRWD.css';

const Result = props => {

  const { date, city, sunrise, sunset, temp, pressure, humidity, clouds, wind, err } = props.weather;
  
  let content = <>
    <div className="">
      <h2>Find your city and check the weather.</h2>
    </div>
    </>;

  if(!err && city) {

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
    <>
    <div className="result-box">
      <div className="result-header">
        <div>{city}</div>
        <div>{date}</div>
      </div>
      <div className="weather-details-container">
      <div className="weather-detail-box temp-box">
          <div className="temp-icon"><i className="fas fa-thermometer-half"></i></div>
          <div className="temp-detail">{temp} &#176;C</div>
      </div>
       <div className="weather-detail-box other-details">
         <div className="suntime">
            <div className="details-box"><i className="fas fa-sort-up"></i><i className="fas fa-sun"></i> {sunriseTime}</div>
            <div className="details-box"><i className="fas fa-sort-down"></i><i className="fas fa-sun"></i> {sunsetTime}</div>
         </div>
         <div className="other-details-container">
            <div className="details-box">
              <i className="fab fa-cloudscale"></i> {pressure} hPa
            </div>
            <div className="details-box">
              <i className="fas fa-tint"></i> {humidity} %
            </div>
            <div className="details-box">
              <i className="fas fa-wind"></i> {wind} m/s
            </div>
            <div className="details-box">
              <i className="fas fa-cloud"></i> {clouds} %
            </div>
         </div>
        </div>
      </div>
    </div>
    </>
    )
  }
  
  return (
<div className="result-container">
  {err ? `Not in database ${city}` : content}
</div>
  )
}

export default Result;
