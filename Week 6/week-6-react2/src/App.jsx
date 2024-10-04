import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { UseEffect } from './components/UseEffect';
import { UseMemo } from './components/UseMemo';
import { UseCallback } from './components/UseCallback';
import { CustomHook } from './components/CustomHooks';
import { UseRef } from './components/UseRef';


function App(){
  return(
    <>
    {/* <UseEffect /> */}
    {/* <UseMemo /> */}
    {/* <UseCallback /> */}
    {/* <CustomHook /> */}
    <UseRef/>
    

    </>
  )
}





export default App
