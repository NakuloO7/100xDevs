import axios from "axios";
import React, { useEffect , useState} from "react";


//this is the implementation of the custom hook created below
function useTodo(){

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then((response)=>{
            setTodos(response.data)
        })
    },[])

    return todos;
}


export function CustomHook(){
    const todos = useTodo();   //custom hook

    return(
        <div>
            {todos.map(todo => <Todo key = {todo.id} id={todo.id} title = {todo.title}/>)}
        </div>
    )

}


function Todo(props){
    return <div>
        <h1>{props.id}</h1>
        <h3>{props.title}</h3>
    </div>
}