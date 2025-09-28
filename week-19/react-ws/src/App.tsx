
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const[latestMessage, setLatestMessage] = useState("");
  const[message, setMessage] = useState("");


  useEffect(()=>{
    const newSocket = new WebSocket("ws://localhost:8080");
    newSocket.onopen = ()=>{
      console.log("Connected");
      setSocket(newSocket)
    }

    newSocket.onmessage = (message)=>{
      console.log("message received", message.data)
      setLatestMessage(message.data)
    }
    return ()=>{
      newSocket.close();
    }
  },[])


  if(!socket){
    return  <div>Connecting to the socker sever...</div>
  }


  return (
    <>
    <input type="text" name="" id=""  onChange={(e)=>{
      setMessage(e.target.value);
    }}></input>
    <button onClick={()=>{
      socket.send(message)
    }}>Send</button>
      {latestMessage}
    </>
  )
}

export default App
