import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

const APIKey = 'f27143c9ba3302311a2c4596d74c5dc0'

class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false
  }

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = e => {
    e.preventDefault()
    const API = 
    `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

    fetch(API)
    .then(res => {
      if(res.ok){
        return res
      }
      throw Error("failed to get data")
    })
    .then(res => res.json())
    .then(data => {
      const time = new Date().toLocaleDateString()
      this.setState(prevState => ({
        err: false,
        date: time,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        city: prevState.value,
      }))
    })
    .catch(err => {
      console.log(err)
      this.setState(prevState => ({
        err: true,
        city: prevState.value
      }))
    })


  }

  render() {
    return (
      <div className="App">
        Weather App
        <Form 
        value={this.state.value} 
        change={this.handleInputChange}
        submit={this.handleCitySubmit}
        />
        <Result weather={this.state}/>
      </div>
    );
  }
}

export default App;
