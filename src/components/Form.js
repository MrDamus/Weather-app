import React from 'react';
import './form.css';

const Form = props => {
  return (
    <form>
      <input
        className="search-box"
        type="text" 
        value={props.value}
        onChange={props.change}
        placeholder="enter city name"
        />
    </form>
  )
}

export default Form
