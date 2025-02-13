
import './App.css'

function App() {

  return (
    <>
    <Todo 
    title='adhfl'
    description="dfad"
    done = {false}
    />
    </>
  )
}

interface Todoprop {
  title : string,
  description : string,
  done : boolean
}



function Todo (props : Todoprop){
  return <div>
    <h4>{props.title}</h4>
    <h3>{props.description}</h3>
  </div>


}

export default App
