import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useMemo } from 'react'
import { useCallback } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setAdjectivee] = useState()

  // const getAdjective = () => {
  //   return "good" + count
  // }


  const getAdjective = useCallback(
    () => {
      return "BBBGOOD" + count
    },
    [count])


  //each time a function is rendered it is not the same as the previous render of that exact same function, WHY?

  //because we are passing a function as a prop everytime the component is re-rendered the function is also rendered again.
  //This causes the navbar to render again because it thinks its props are changed.
  return (
    <>
      <Navbar adjective={"good"} getAdjective={getAdjective} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
