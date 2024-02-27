import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card }from "./components/Card.jsx";

function App() {
  let myObj={
    username:"Hello",
    age:21,
  }
  let myObj1={
    age:23,
    btntext:"click me"
  }
  let myArr=[1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind css</h1>
      <Card obj={myObj}/>
      <Card obj={myObj1}/>
    </>
  )
}

export default App
