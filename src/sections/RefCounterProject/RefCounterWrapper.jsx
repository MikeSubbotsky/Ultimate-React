import React, { useReducer, useRef } from 'react';
import Reducer from './Reducer';

function RefCounterWrapper() {
  const initialState = { count: 0, resetCount: 0 };
  const [state, dispatch] = useReducer(Reducer, initialState);
  const plusPressed = useRef(0);
  const minusPressed = useRef(0);
  const resetPressed = useRef(0);


  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <h1> Reset Counter: {state.resetCount}</h1>
      <button onClick={() => {
        plusPressed.current++;
        dispatch({ type: "increment" })
        }}>Plus {plusPressed.current}</button>
      <button onClick={() => {
        minusPressed.current++;
        dispatch({ type: "decrement" })
        }}>Minus {minusPressed.current}</button>
      <button onClick={() => {
        resetPressed.current++;
        dispatch({ type: "reset" })
      }}>Reset {resetPressed.current}</button>
    </div>
  );
}

export default RefCounterWrapper;