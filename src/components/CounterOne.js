import React, { useReducer } from 'react';
// step1: importing useReducer

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
/*
  step2: defining reducer function
  
  - action dictates the nature of new-state
*/

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  /*
    step3: utilising useReducer

    - useReducer basically returns state variable 'count' & 'dispatch' function. 
  */

  return (
    <div>
      <span>count: { count }</span>
      <br />
      <button onClick= { () => { dispatch('increment') } }>increment</button>
      <button onClick= { () => { dispatch('decrement') } }>decrement</button>
      <button onClick= { () => { dispatch('reset') } }>reset</button>
    </div>
  );
}

export default CounterOne;

/*

- This example depicts simple state-action-reducer where state & actions are simple strings unlike objects as found in Redux
  Its not necessarily to restrict only strings. Can be objects in complex scenarios.

*/
