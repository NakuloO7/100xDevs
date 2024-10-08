import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';
// import { CountContext } from './context';

function App() {

  //wrap everyone that wants to use teleported value inside provider
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count(){
  //this is not using any state variable but still it re-renders
  console.log("count rerendering")
  return <div>
    <CountRenderer />
    <Button  />
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom);
  return <div>
    <h3>{count}</h3>
    <h4>
      <EvenCount />
    </h4>
  </div>
}

function EvenCount(){
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? "It is even" : null}
  </div>
}

function Button(){
  const setCount = useSetRecoilState(countAtom);

  console.log("buttons re-rendering")
  return <div>
    <button onClick={()=>{
      setCount(count => count + 1)
    }}>Increase Count</button>

    <button onClick={()=>{
      setCount(count => count - 1)
    }}>Decrease Count</button>
  </div>

}

export default App
