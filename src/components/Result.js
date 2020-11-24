import React from 'react';
import './Result.css';

const Result = props => {

  const { date, city, sunrise, sunset, temp, pressure, wind, err } = props.weather;
  
  let content = <>
    <div className="result-container">
    <h2>Find your city and check the weather.</h2>
    </div>
    </>;

  if(!err && city) {

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
    <>
    <div className="result-header">
      <h3>
      <em>{city}</em>
      </h3>
      <h4>
        {date}
      </h4>
    </div>
    <div className="temp-details">
      <div className="details-box"><i className="fas fa-thermometer-half"></i>{temp} &#176;C</div>
    </div>
    <div className="other-details">
      <div className="details-box">
        <i className="fas fa-sort-up"></i><i className="fas fa-sun"></i> {sunriseTime}
      </div>
      <div className="details-box">
        <i className="fas fa-sort-down"></i><i className="fas fa-sun"></i> {sunsetTime}
      </div>
      <div className="details-box">
        <i className="fab fa-cloudscale"></i>{pressure} hPa
      </div>
      <div className="details-box">
        <i className="fas fa-wind"></i>{wind} m/s
      </div>
    </div>
    </>
    )
  }
  
  return (
<div className="result">
  {err ? `Not in database ${city}` : content}
</div>
  )
}

export default Result;
