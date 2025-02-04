import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // let a = 0
  const a = useRef(0)

  useEffect(() => {
    // a = a + 1
    a.current= a.current + 1
    console.log(`rendering.. and the value of a is: ${a.current}`)
  })
  
  //---------------------------------------------------------------------
  
  const ref = useRef()
  useEffect(() => {
    console.log("First Render")
    ref.current.style.backgroundColor = "red";
  }), []


  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={ref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <button onClick={()=>{ref.current.style.display = "none"}}>Click me!</button>
    </>
  )
}

export default App
