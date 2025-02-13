import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './assets/features/counterSlice';



//We can read data from the store with useSelector, and dispatch actions using useDispatch

function App() {
  const [counter, setCounter] = useState(0);
  const count = useSelector((state) => state.counter.value); //value defined in counterSlice
  const dispatch = useDispatch();
  

  //step 1: create a store.js file
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() =>dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br />
      <br />
      <input type="number" placeholder='Enter the amount' onChange={(e)=>{
        setCounter(Number(e.target.value));
      }}/>

      <button onClick={()=>dispatch(incrementByAmount(counter))}>Increase by Amount</button>

      
    </>
  )
}

export default App;
