import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'

function App() {
  return (
    <>
      <h1 className='text-gray-100'>Hello to Redux ToolKit TODO</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
