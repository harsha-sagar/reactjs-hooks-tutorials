import React, { useContext } from 'react';

import CountContext from './CountContext';

function ComponentD() {
  const counterControl = useContext(CountContext);

  return (
    <div>
      Component D
      <button onClick={ () => counterControl.dispatch('decrement') }>Decrement by 1</button>
    </div>
  );
}

export default ComponentD;
