import React from 'react';

function Input(props) {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <input
      onChange={handleChange}
      type={props.input}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
