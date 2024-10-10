import { useState, useEffect } from 'react'
import './App.css'
import {RecoilRoot, useRecoilValue, useRecoilState} from 'recoil'
import { todoAtom } from './assets/atom'
import axios from 'axios'

function App() {
  return (
      <RecoilRoot>
        <Main />
      </RecoilRoot>
  )
}

function Main(){

  
  //this is done using the useEffect hook
  //we will try to fetch this data inside the atom itself
  // const [todoValue, settodoValue] = useRecoilState(todoAtom);
  // useEffect(()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/todos/1")
  //   .then((res)=>{
  //     settodoValue(res.data);
  //   })
  // },[])

  const todoValue = useRecoilValue(todoAtom);

  return <div>
    <h1>{todoValue.id}</h1>
    <h1>{todoValue.title}</h1>
  </div>
}

export default App
