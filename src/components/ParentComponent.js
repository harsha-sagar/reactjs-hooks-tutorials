import React, { useState, useCallback } from 'react';

import Info from './Info';
import Button from './Button';

function ParentComponent() {
  const [ age, setAge ] = useState(0);
  const [ salary, setSalary ] = useState(0);

  const incrementAge = useCallback(
    () => {
      setAge(age + 1);
    },
    [ age ]
  );

  const incrementSalary = useCallback(
    () => {
      setSalary(salary + 1);
    },
    [ salary ]
  );

  console.log('inside parent');
  return (
    <div>
      <br/>
      <Info field='age' val={ age }></Info>
      <Button field='age' handleClick = { incrementAge } >increment age</Button>
      <br/>
      <Info field='salary' val={ salary }></Info>
      <Button field='salary' handleClick = { incrementSalary }>increment salary</Button>
    </div>
  );
}

export default ParentComponent;
