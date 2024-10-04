//WRAPPER

function App(){
  return(
    <>
    {/* rendering a component inside a component */}
    {/* <CardWrapper innerComponent = {<TextComponent/>} /> */}
    <CardWrapper>
      <TextComponent/>
      <TextComponent/>
    </CardWrapper>
    </>
  )
}

function TextComponent(){
  return <div>
  <h1>Hii there</h1>
  </div> 
}

function CardWrapper({children}){
 return <div style={{border : "2px solid black"}}>
  {children}
 </div>
}

export default App


/*
//ASSIGNMENT TODOS
import { useState } from "react"

let counter = 4;

function App() {

  const [todos, setTodos] = useState([{
    id : 1,
    title : "Gym",
    description : "Go to gym in morning"
  },{
    id: 2,
    title : "Work",
    description : "Complete your work till the late afternoon"
  },{
    id : 3,
    title : "Code",
    description : "Code for 3 hours straight in the night"
  }
])

function addTodo(){
  //spread operator
  setTodos([...todos, {
    id : counter++,
    title : Math.random(),
    description : Math.random()
  }])
}


  return (
    <>
    <button onClick={addTodo}>Add a todo</button>
     {todos.map((todo)=> <Todo key ={todo.id} title ={todo.title} description={todo.description}/>)}
    </>
  )

 
}



function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h5>{props.description}</h5>
  </div>
}
export default App
*/
