import React, { useContext } from 'react';

import CountContext from './CountContext';

function ComponentA() {
  const counterControl = useContext(CountContext);

  return (
    <div>
      Component A
      <button onClick={ () => counterControl.dispatch('increment') }>Increment by 1</button>
    </div>
  );
}

export default ComponentA;
