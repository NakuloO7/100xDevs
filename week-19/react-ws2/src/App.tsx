import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [message, setMessage] = useState("");
  const [latestMessage, setLatestMessage] = useState("");


  useEffect(()=>{
    const newSocket = new WebSocket('ws://localhost:8080');
    //just after we establish the connection
    newSocket.onopen = ()=>{
      console.log("Connnection Establised");
      // newSocket.send("Hello sever")
    }

    //after we send the message 
    newSocket.onmessage = (message)=>{
      console.log("message received", message.data)
      setLatestMessage(message.data)
    }
    setSocket(newSocket);
    return ()=>newSocket.close();

  }, [])

  if(!socket){
    return <div>Loading...</div>
  }

  return (
    <>
      <div>
        <input type="text" onChange={(e)=>{
          setMessage(e.target.value)
        }} />
        <button onClick={()=>{
          socket.send(message);
        }}>Send</button>
        {latestMessage}
      </div>
    </>
  )
}

export default App
