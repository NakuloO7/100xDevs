import { useEffect, useState } from 'react'
import './App.css'
import React from 'react'
import axios from 'axios'


const useDebounce = (value, timeout) =>{
  const[debounceValue, setDebouncedValue] = useState(value)

  useEffect(()=>{
    const timeoutNum = setTimeout(() => {
      setDebouncedValue(value)
    }, timeout);

    return ()=>{
      clearTimeout(timeoutNum);
    }
  },[value]);

  return debounceValue;
}


function App() {
  const[value, setValue] = useState('')
  const debounceValue = useDebounce(value, 500);
  
  
  return (
    <>
    Debounced value is {debounceValue}
    {/* {console.log(`Debounced value is ${debounceValue}`)} */}
    <input type = "text" onChange={e => setValue(e.target.value)}/>
    </>
  )
}

function Track({todo}){
  return <div>
    <div>{todo.id}</div>
    <br />
    <div>{todo.title}</div>
  </div>
}




export default App
