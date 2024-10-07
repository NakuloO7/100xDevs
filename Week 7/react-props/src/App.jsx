import { useState, useContext } from 'react'
import './App.css'
import { CountContext } from './context';

function App() {

  const [count, setCount] = useState(0);

  //wrap everyone that wants to use teleported value inside provider
  return (
    <div>
      <CountContext.Provider value = {{count, setCount}}>
        <Count />
      </CountContext.Provider>
    </div>
  )
}

function Count(){
  return <div>
    <CountRenderer />
    <Button  />
  </div>
}

function CountRenderer(){
  const {count,setCount}= useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Button(){
  const {count,setCount}= useContext(CountContext);
  return <div>
    <button onClick={()=>{
      setCount(count + 1)
    }}>Increase Count</button>

    <button onClick={()=>{
      setCount(count - 1)
    }}>Decrease Count</button>
  </div>

}

export default App
