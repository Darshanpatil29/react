import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  // let counter=0; 
  let [counter,setCounter] = useState(0);

  const increment=()=>{
    if(counter<20)
    counter++;  
    setCounter(counter)
  }
  const decrement=()=>{
    if(counter>0)
    counter=counter-1; 
    setCounter(counter)
    // set coounter takes call back function like setCounter(()=>{}) to update value immediately instead of batches use arrow function
  }
  return ( 
    <>
      <h1>Hello World !!</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={increment}>Increment counter</button>
      <button onClick={decrement}>Decrement counter</button>
    </>
  )
}

export default App
