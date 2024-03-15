import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/Theme.js'
import ThemeBtn from './components/ThemeBtn.jsx'
import Card from './components/Card.jsx'

function App() {
  const [themeMode,setThemeMode]=useState("light");

  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  // actual theme change
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    const mode=themeMode
    document.querySelector('html').classList.add(mode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>
        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App
