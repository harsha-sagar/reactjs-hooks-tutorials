import React, { useReducer } from 'react';

const initialState = {
  firstCounter: 0,
  secondCounter: 5
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'increment-counter-1':
      return { ...state, firstCounter: state.firstCounter + action.byVal };
    case 'decrement-counter-1':
      return { ...state, firstCounter: state.firstCounter + action.byVal };
    case 'increment-counter-2':
      return { ...state, secondCounter: state.secondCounter + action.byVal };
    case 'decrement-counter-2':
      return { ...state, secondCounter: state.secondCounter + action.byVal };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <span>count: { count.firstCounter }</span>
      <button onClick= { () => { dispatch({ type: 'increment-counter-1', byVal: 1 }) } }>increment first-counter by 1</button>
      <button onClick= { () => { dispatch({ type: 'decrement-counter-1', byVal: 1 }) } }>decrement first-counter by 1</button>
      <button onClick= { () => { dispatch({ type: 'increment-counter-1', byVal: 5 }) } }>increment first-counter by 5</button>
      <button onClick= { () => { dispatch({ type: 'decrement-counter-1', byVal: 5 }) } }>decrement first-counter by 5</button>
      <br /><br />
      <span>count: { count.secondCounter }</span>
      <button onClick= { () => { dispatch({ type: 'increment-counter-2', byVal: 1 }) } }>increment second-counter by 1</button>
      <button onClick= { () => { dispatch({ type: 'decrement-counter-2', byVal: 1 }) } }>decrement second-counter by 1</button>
      <br /><br />
      <button onClick= { () => { dispatch({ type: 'reset' }) } }>reset</button>
    </div>
  );
}

export default CounterTwo;

/*

- This example depicts complex state-action-reducer where state & actions are objects as found in Redux

1. What are the advantages of using action as object ?
  - Can supply additional detail to reducer. In this example the value by which increment/decrement of counter to be done.

2. What are the advantages of using state as object ?
  - Ability to track the status of independent entities. In this example count of 2 different counters

*/
