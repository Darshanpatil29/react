import { useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [nAllowed , setNAllowed]=useState(false)
  const [cAllowed , setCAllowed]=useState(false)
  const [password, setPassword]=useState("")
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(nAllowed){
      str+="0123456789"
    }
    if(cAllowed){
      str+="!@#$%^&*()"
    }
    for (let i = 1; i <=length; i++) {
      let char=Math.floor((Math.random()*str.length))
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,nAllowed,cAllowed,setPassword])

  
  const copyToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{passwordGenerator()},[length,nAllowed,cAllowed])


  const passwordRef=useRef(null)


  return (
    <>  
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-10 text-orange-500 bg-gray-600'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-6'>
    <input 
    type="text" 
    value={password} 
    className='outline-none w-full py-1 px-3' 
    placeholder='Password' 
    readOnly
    ref={passwordRef}
    />
    <button onClick={copyToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={32}
        value={length}
         className='cursor-pointer'
         onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={nAllowed}
          id="numberInput"
          onChange={()=>{setNAllowed((prev)=>!prev)}}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={cAllowed}
              id="characterInput"
              onChange={()=>{setCAllowed((prev)=>!prev)}}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
