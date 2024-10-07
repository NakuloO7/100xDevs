import React, { Suspense } from 'react';
import './App.css'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'

const Dashboard = React.lazy(()=>import('./components/dashboard'));
const Landing = React.lazy(()=> import('./components/Landing'));


function App() {
  
  return (
    <div>
      <BrowserRouter>

        <Appbar />
  
        <Routes>
          <Route path = "/dashboard" element = {<Suspense fallback ={<div>Loading...</div>} > <Dashboard/> </Suspense> }/>
          <Route path = "/" element = {<Suspense fallback ={<div>Loading...</div>} > <Landing/> </Suspense> }/>
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}


function Appbar(){
  const navigate = useNavigate();
  //this is bacause the useNavigate hook only works when it is placed under the BrowserRouter

  return <div>
    <div>
       <button onClick={()=>{
         navigate('/');
       }}>Landing</button>
       <button onClick={()=>{
         navigate('/dashboard')
       }}>Dashboard</button>
     </div>
  </div>
}

export default App
