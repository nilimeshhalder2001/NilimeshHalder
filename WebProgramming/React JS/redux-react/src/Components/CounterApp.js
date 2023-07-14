import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { decrementcounter, incrementcounter } from '../Services/Actions/CounterAction';

const CounterApp = () => {
    const count=useSelector((state)=>state.count);
    const dispatch=useDispatch();

    const handleincrement=()=>{
      dispatch(incrementcounter());
       
    }
    const handledecrement=()=>{
      dispatch(decrementcounter());
       
    }
  return (
    <div>
      <h3>Counter App</h3>
      <h4>Count :{count}</h4>
      <button onClick={handleincrement}>Increment</button>
      <button onClick={handledecrement} disabled={count===0}>Decrement</button>
    </div>
  )
}

export default CounterApp;
