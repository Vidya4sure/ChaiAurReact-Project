import { useState } from 'react'

import './App.css'

function App() {
  const [color , setColor] = useState("olive");
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>
        <div className='fixed flex flex-wrap bottom-12 inset-x-0 justify-center px-2'>
          <div className='flex flex-wrap justify-center gap-3 bg-slate-50 px-2 py-1 font-semibold shadow-lg rounded-md'>
              <button onClick={()=> setColor("red")} className='outline-none px-2 py-1 rounded-md text-white' style={{background : "red"}}>
                Red
              </button>
              <button onClick={()=> setColor("Green")} className='outline-none px-2 py-1 rounded-md text-white' style={{background : "green"}}>
                Green
              </button>
              <button onClick={()=> setColor("Blue")} className='outline-none px-2 py-1 rounded-md text-white' style={{background : "Blue"}}>
                Blue
              </button>
              <button onClick={()=> setColor("Orange")} className='outline-none px-2 py-1 rounded-md text-white' style={{background : "orange"}}>
                Orange
              </button>
              <button onClick={()=> setColor("Violet")} className='outline-none px-2 py-1 rounded-md text-white' style={{background : "Violet"}}>
                Violet
              </button>
              <button onClick={()=> setColor("Purple")} className='outline-none px-2 py-1 rounded-md text-white' style={{background : "Purple"}}>
                Purple
              </button>
              <button onClick={()=> setColor("Yellow")} className='outline-none px-2 py-1 rounded-md ' style={{background : "Yellow"}}>
                Yellow
              </button>
              <button onClick={()=> setColor("Olive")} className='outline-none px-2 py-1 rounded-md text-white' style={{background : "Olive"}}>
                Olive
              </button>
              <button onClick={()=> setColor("Pink")} className='outline-none px-2 py-1 rounded-md' style={{background : "Pink"}}>
                Pink
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
