import React, { useState } from 'react'

function FormInput() {

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`first-name: ${firstName}, last-name: ${lastName}`);
    setFirstName('');
    setLastName('');
  }

  return (
    <div>
      <form onSubmit = { onSubmit }>
        <label>First Name</label>
        <input type='text' value={ firstName } onChange= { (e) => setFirstName(e.target.value) }/>
        <label>Last Name</label>
        <input type='text' value={ lastName } onChange= { (e) => setLastName(e.target.value) }/>
        <button>Submit</button>
      </form>   
    </div>
  );
}

export default FormInput;
