import React, { useEffect, useState, useRef } from 'react';


export function UseRef(){

    const [incomeTax, setIncomeTax] = useState(20000);
    //perviously while manipulating a dom we set and id or class to the element which we want to access
    //but in react by simply using useRef() hook we can do it easily

    const ref = useRef();

    useEffect(()=>{
        setInterval(()=>{
            // document.getElementById("incomeTaxReturns").innerHTML = 23000;
            //instead of accessing the elemet through the complex way we can simply do this
            ref.current.innerHTML = 23000;
        }, 5000)

    },[])


    return(
        <>
        Hi there your income tax returns are <div ref ={ref} >{incomeTax}</div>
        </>
    )
}