import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)

  // When using strictmode(used in development) the program is run 2 times one for checking other for displaying
  // so thats why you see the alerts 2 times


  //Case 1: Run on every render
  useEffect(() => {
    alert('This will run on every render')
  })

  //Case 2: Run on First render only
  useEffect(() => {
    alert('2. Runs on First render only')
  }, [])

  //Run only when certain values change
  useEffect(() => {
    alert('The value of count was changed')
    setColor(color + 1)
  }, [count])

  return (
    <>
      <Navbar color={"Cyan" + " and blue " + color} />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
