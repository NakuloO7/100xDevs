import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {

  return (
    <div className='grid grid-cols-4 gap-5'>
    <RevenueCard title ={"Amount Pending"} orderCount={"13"} amount={"92,312.20"}/>
    <RevenueCard title ={"Amount Pending"} orderCount={"13"} amount={"92,312.20"}/>
    </div>
  )
}

export default App
