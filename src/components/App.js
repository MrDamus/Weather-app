import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

class App extends Component {

  state = {
    value: "sting"
  }

  render() {
    return (
      <div className="App">
        Weather App
        <Form text={this.state.value}/>
        <Result />
      </div>
    );
  }
}

export default App;
