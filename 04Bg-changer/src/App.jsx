import {useState} from 'react'
function App() {
 const [color, setColor] = useState('olive')
  const fitColor=(color)=>{
    setColor(color)
 }
  return (
    <>
     <div  className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center shadow-xl gap-3 bg-white px-5 py-3 rounded-3xl'>
          <button onClick={()=>{fitColor("red")}} className='outline-none px-5 rounded-full ' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>{ setColor("orange")}} className='outline-none px-5 rounded-full ' style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=>{ setColor("yellow")}} className='outline-none px-5 rounded-full ' style={{backgroundColor:"yellow"}}>Yellow</button>
          <button onClick={()=>{ setColor("green")}} className='outline-none px-5 rounded-full ' style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>{ setColor("blue")}} className='outline-none px-5 rounded-full ' style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>{ setColor("indigo")}} className='outline-none px-5 rounded-full ' style={{backgroundColor:"indigo"}}>Indigo</button>
          <button onClick={()=>{ setColor("violet")}} className='outline-none px-5 rounded-full ' style={{backgroundColor:"violet"}}>Violet</button>
          <button onClick={()=>{ setColor("black")}} className='outline-none px-5 rounded-full ' style={{backgroundColor:"black",color:"white"}}>Black</button>
          <button onClick={()=>{ setColor("white")}} className='outline-none px-5 rounded-full ' style={{backgroundColor:"white", borderBlockColor:"black"}}>White</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
