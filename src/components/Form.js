import React from 'react';

const Form = props => {
  return (
    <form>
      <input
        type="text" 
        value={props.value}/>
      <button>search city</button>
    </form>
  )
}

export default Form
