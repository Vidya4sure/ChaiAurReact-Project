import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8);
  const [numAllowed , setNumAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

 const passwordGenerator = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numAllowed) str = str + "1234567890"
  if(charAllowed) str = str + "!#$'()*+,-./:;<=>?@[]^_`{|}~"

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }

  setPassword(pass)

} , [length , numAllowed , charAllowed , setPassword])

 const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(0 , 100)
    window.navigator.clipboard.writeText(password)
 } , [password])

  useEffect(()=>{
    passwordGenerator()
  } , [length , numAllowed , charAllowed])

  return (
    <>
      <div className='text-center text-3xl m-5 p-4 font-semibold text-slate-200 bg-indigo-950 max-w-2xl mx-auto rounded'>
        <h1>Dumb Password Generator</h1>
      </div>
      <div className='w-full max-w-2xl mx-auto shadow-md text-center bg-slate-500 p-5 rounded'>
        <div className='flex justify-center flex-wrap'>
          <input ref={passwordRef} className='text-orange-500 text-xl p-2 rounded outline-none w-3/4' type="text" placeholder='Generating..' value={password} readOnly/>
          <button onClick={copyPasswordToClipboard} className='text-2xl text-white bg-blue-700 hover:bg-blue-500 p-2 ml-1 rounded outline-none font-medium'>Copy</button>
        </div>

        <div className='flex flex-wrap mt-2 justify-center p-4 gap-3 text-xl '>
          <div>
            <input className='mr-2' type="range" min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
            <label className='text-xl  px-4 py-2' >Length {length}</label>
          </div>
          <div>
            <input className='mr-2' type="checkbox"  id="numberAllowed" defaultChecked={numAllowed} onChange={()=> setNumAllowed((prev) => !prev)}/>
            <label  htmlFor="numberAllowed">Numbers</label>
          </div>
          <div>
            <input className='mr-2' type="checkbox" id='charAllowed' defaultChecked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)}/>
            <label htmlFor="charAllowed">Special Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
