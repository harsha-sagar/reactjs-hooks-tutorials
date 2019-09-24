import React, { useState } from 'react';

function HookCounterTwo() {
  const [count, setCount] = useState(0);

  const incrementByOne = () => {
    setCount((prevCount) => prevCount + 1);
  }

  const incrementByFive = () => {
    setCount((prevCount) => prevCount + 5);
  }

  return (
    <div>
      Count { count }
      <br/>
      <button onClick= { incrementByOne }>increment By One</button>
      <button onClick= { incrementByFive }>increment By Five</button>
    </div>
  )
}

export default HookCounterTwo;
