import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let a = 5

  return (
    <>
      <div>Count is {count}</div>
      <button onClick={() => { setCount(count + 1) }}>Update Count</button>
      {/* when we use State hook it updates the value whereever its being used on value's change.*/}

      <div>Count is {a}</div>
      {/* 
      This shows the value of 'a', but does not update its value on the web view when update button is clicked,
      This is because it outputs the value of 'a' in its container when the page loads. 
      it will not update on the view but in the backend it will be incremented
      */}
      <button onClick={() => { a++; console.log(a) }}>Update Count using variable</button>
    </>
  )
}

export default App
