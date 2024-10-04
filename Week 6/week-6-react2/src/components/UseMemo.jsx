import React, { useMemo } from "react";
import { useEffect, useState } from 'react'
import axios from "axios";

export function UseMemo(){
    const [counter, setCounter]= useState(0);
    const [inputVal, setInputVal]= useState(0);
    // const [count, setCount] = useState(0);

    //we can use the useEffect hook here to stop the unnecessary re-rendering but it is slightly unoptimal 

    // useEffect(()=>{
    //     let sum = 0;
    //     for(let i = 1; i<= inputVal; i++){
    //         sum += i;
    //     }
    //     setCount(sum);
    // }, [inputVal]);
    
    //so we have  used the useMemo
    //this function defines the that the sum will only re-render only when the input value is changed
    //this is very close to useEffect
    let count = useMemo(()=>{
        let sum = 0;
        for(let i = 1; i<= inputVal; i++){
            sum += i;
        }
        return sum;
    }, [inputVal])

    return(
        <>
        <input onChange= {(e)=>{
            setInputVal(e.target.value);
        }}type="text" placeholder="Number" />
        <br />
        <h1>The sum form 1 till {inputVal} is {count} </h1>

        <button onClick={()=> setCounter(counter + 1)}>Counter ({counter})</button>
        </>
    )

}