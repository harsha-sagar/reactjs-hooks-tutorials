import React, { useState, useMemo } from 'react'

function Counter() {
  const [ counterOne, setCounterOne ] = useState(0);
  const [ counterTwo, setCounterTwo ] = useState(0);

  const isCounterOneCountEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;

    console.log('inside computation');

    return (counterOne % 2 === 0);
  }, [ counterOne ]);

  console.log('rendering counter');

  return (
    <div>
      <button onClick = { () => setCounterOne(counterOne + 1)}>counter-one count: { counterOne }</button>
      <span>isEven: { isCounterOneCountEven ? 'yes' : 'no' }</span>
      <br/>
      <button onClick = { () => setCounterTwo(counterTwo + 1)}>counter-two count: { counterTwo }</button>     
    </div>
  )
}

export default Counter;
