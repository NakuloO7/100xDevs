import React from "react";
import { useEffect, useState } from 'react'
import axios from "axios";

export function UseEffect(){

    const [id, setId] = useState(1);

    const handleClick = (BtnId)=>{
      setId(BtnId);
    }
  
    return(
      <>
      <button onClick={() => handleClick(1)}>1</button>
      <button onClick={() => handleClick(2)}>2</button>
      <button onClick={() => handleClick(3)}>3</button>
      <button onClick={() => handleClick(4)}>4</button>
      <Todo id= {id}/>
      </>
    )
  }
  
  function Todo({id}){
    const [todos, setTodos] = useState({});
    //writing a useEffect hook to fetch the data form the backend for id = 1
  
    useEffect(()=>{
      axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => {
        setTodos(response.data);
        // console.log(response.data);
      })
      
    },[id])
  
  
    return <div>
      <h1>{todos.id}</h1>
      <h4>{todos.title}</h4>
    </div>
  

}



/*
//this is the simple code to demonstarte the simple fetcth call using the axios and useEffect hook
function App() {
  const [todos, setTodos] = useState(0);

  useEffect(()=>{
    //axios syntax for the backend call ('npm install axios')
    axios.get(`ttps://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response)=>{
      setTodos(response.data.todos)
    })
  },[])

  return (
    <>
      {todos.map(todo => <Todo title={todos.title} description = {todos.description}/>)};
    </>
  )
}



function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    {props.description}
  </div>
}
  */