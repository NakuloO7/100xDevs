import './App.css'
import MyComp from './MyComp';
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { decrement, increment } from './redux/slices/counter';

function App() {
  const count = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
    <h1>Redux toolkit</h1>
    <h1>Count is {count}</h1>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    <MyComp/>
    </>
  )
}

export default App
