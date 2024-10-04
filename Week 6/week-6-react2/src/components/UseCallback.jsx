import React, { memo, useCallback, useState } from "react";

export function UseCallback(){
    const [count, setCount] = useState(0);

    //react does not know that this is the same function which is called again 
    //thus it treats it as diffrent func and rerenders it again and again
    // function onClick(){
        //     console.log("child clicked")
    // }

    //to solve this we use useCallback
    const onClick = useCallback(()=>{
        console.log("Child Clicked")
    })

    return (
        <>
        <Child onClick = {onClick}/>
        <button onClick={()=> setCount(count + 1)}> Click Me ({count})</button>
        </>
    )

}


//memo 
//as we know that if the parent component rerenders the child components will also rerender
//but if you use the memo in this case then the child component will only rerender when the input is changed of the child
const Child = memo(({onClick})=>{
    console.log("child rerender")

    return <div>
        <button onClick={onClick}>Child Clicked</button>
    </div>
    
})