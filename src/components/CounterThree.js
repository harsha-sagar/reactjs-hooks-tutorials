import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <span>count: { count }</span>
      <button onClick= { () => { dispatch('increment') } }>increment counter-1 by 1</button>
      <button onClick= { () => { dispatch('decrement') } }>decrement counter-1 by 1</button>
      <button onClick= { () => { dispatch('reset') } }>reset counter-1</button>
      <br /><br />
      <span>count: { count2 }</span>
      <button onClick= { () => { dispatch2('increment') } }>increment counter-2 by 1</button>
      <button onClick= { () => { dispatch2('decrement') } }>decrement counter-2 by 1</button>
      <button onClick= { () => { dispatch2('reset') } }>reset counter-2</button>
    </div>
  );
}

export default CounterThree;

/*

- state as object is best recommended for cases of managing of independent entities at global level.
  In-case at local level, rather state as object, it is recommended to use state as primitive (i.e. string) & multiple useReducers.

*/
