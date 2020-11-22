import React from 'react';

const Form = props => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text" 
        value={props.value}
        onChange={props.change}
        placeholder="enter city name"
        />
      <button>search city</button>
    </form>
  )
}

export default Form
