import React, { useState } from 'react';

function HookCounterThree() {
  const [name, setName] = useState({
    firstName: '',
    lastName: ''
  });

  return (
    <div>
      <input value={ name.firstName } onChange={ (e) => setName({ ...name, firstName: e.target.value })}/>
      <br/>
      <input value={ name.lastName } onChange={ (e) => setName({ ...name, lastName: e.target.value })}/>
      <br/>
      First Name: { name.firstName }
      <br/>
      Last Name: { name.lastName }
    </div>
  )
}

export default HookCounterThree;
