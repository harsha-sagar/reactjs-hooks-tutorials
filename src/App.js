import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

import { CountProvider } from './components/CountContext';

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

function App() {
  const [ count, dispatch ] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <span>Count: { count }</span>
      <CountProvider value= { {count: count, dispatch: dispatch} }>
        <ComponentA />
        <ComponentB />
        <ComponentC />        
      </CountProvider>
    </div>
  );
}

export default App;

/*

- Demonstrates the example for managing the state across global level (using useReducer) & sharing the management of state across component tree (using useContext)

*/
