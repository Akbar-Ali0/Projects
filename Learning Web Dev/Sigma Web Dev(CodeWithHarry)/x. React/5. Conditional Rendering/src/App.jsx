import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(false)

  const [toDo, settoDo] = useState([
    {
      title: "Heytitle",
      desc: "i am a good todo"
    },
    {
      title: "Another Todo",
      desc: "I am also a good todo"
    },
    {
      title: "Grocery Todo",
      desc: "I am a good todo but I'm a grocery todo"
    }
  ])





  //You can have a component inside another component
  // const todo = ({ t }) => {
  //   return (
  //     <>
  //       <div className="todoTitle">{t.title}</div>
  //       <div className="todoDesc">{t.desc}</div>
  //     </>
  //   )
  // }
  return (
    <>
    
      {toDo.map(todo => {
        // return <Todo key={todo.title} todo={todo}/>
        return <div key={todo.title}>

          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      })}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>


      {/* {showbtn? <button>I will only be shown when second button is clicked!</button>: "Thenga"} */}
      {showbtn && <button>I will only be shown when second button is clicked!</button>}


      <div className="card">


        <button onClick={() => { setshowbtn(!showbtn) }}> CLICKY CLICKY </button>
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
