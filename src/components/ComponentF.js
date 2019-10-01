import React, { useContext } from 'react';

import CountContext from './CountContext';

function ComponentF() {
  const counterControl = useContext(CountContext);

  return (
    <div>
      Component F
      <button onClick={ () => counterControl.dispatch('reset') }>reset</button>
    </div>
  );
}

export default ComponentF;
