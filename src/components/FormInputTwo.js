import React, { useState } from 'react';

import useFormInput from '../hooks/useFormInput';

function FormInputTwo() {

  const [ firstName, bindFirstName, resetFirstName ] = useFormInput('');
  const [ lastName, bindLastName, resetLastName ] = useFormInput('');

  const onSubmit = (e) => {
    e.preventDefault();
    
    alert(`first-name: ${firstName}, last-name: ${lastName}`);
    
    resetFirstName();
    resetLastName();
  }

  return (
    <div>
      <form onSubmit = { onSubmit }>
        <label>First Name</label>
        <input type='text' { ...bindFirstName }/>
        <label>Last Name</label>
        <input type='text' { ...bindLastName }/>
        <button>Submit</button>
      </form>   
    </div>
  );
}

export default FormInputTwo;
