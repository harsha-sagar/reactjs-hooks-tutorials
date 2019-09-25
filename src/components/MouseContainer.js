import React, { useState } from 'react';
import HookMouse from './HookMouse';

function MouseContainer() {

  const [displayFlag, setDisplayFlag] = useState(true);

  return (
    <div>
      <button onClick= { () => setDisplayFlag(!displayFlag) }>Toggle Display</button>
      { displayFlag && <HookMouse /> }
    </div>
  );
}

export default MouseContainer
