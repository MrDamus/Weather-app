import React from 'react';
import './Result.css';

const Result = props => {

  const { date, city, sunrise, sunset, temp, pressure, wind, err } = props.weather;
  
  let content = null;

  if(!err && city) {

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
    <>
      <h3>
      Searching for city <em>{city}</em>
      </h3>
      <h4>
        Date and time: {date}
      </h4>
      <h4>
        Actual temp: {temp} &#176;C
      </h4>
      <h4>
        Sunrise at: {sunriseTime}
      </h4>
      <h4>
        Sunset at: {sunsetTime}
      </h4>
      <h4>
        Pressure: {pressure} hPa
      </h4>
      <h4>
        Wind speed: {wind} m/s
      </h4>
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
