import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice'

function App() {
  const [amount, setAmount] = useState(0);
  
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  let handleIncrementClick = ()=>{
    dispatch(increment());
  }

  let handleDercreamentClick = ()=>{
    dispatch(decrement());
  }

  let handleResetClick = ()=>{
    dispatch(reset());
  }

  let handleIncAmountClick = () =>{
    dispatch(incrementByAmount(amount));
  }

  return (
    <>
      <button onClick={handleIncrementClick}>+</button>
      <p>Count : {count} </p>
      <button onClick={handleDercreamentClick}>-</button>
      <br />
      <br />
      <button onClick={handleResetClick}>Reset</button>
      <br />
      <br />
      <input type='Number'
      placeholder='Enter amount'
      value={amount}
      onChange={e =>{
        setAmount(e.target.value);
      }}
      />
      <br />
      <br />
      <button onClick={handleIncAmountClick}>Inc by amount</button>
    </>
  )
}

export default App
