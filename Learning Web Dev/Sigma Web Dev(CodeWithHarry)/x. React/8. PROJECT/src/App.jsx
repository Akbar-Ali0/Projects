import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function App() {
  const [todos, setTodos] = useState([])    //Holds every todo
  const [todo, setTodo] = useState("")      //Current todo
  const [showFinished, setshowFinished] = useState(true)

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  useEffect(() => {                                                     //save todos into local storage
    let todoString = localStorage.getItem("todos")
    if (todoString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const handleAdd = () => {                                             //Functionality to Add todos
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    // setTodos([...todos, { [id]:uuidv4(), todo, isCompleted: false }])
    setTodo("")
    // console.log(todos)
    saveToLS()
  }

  const handleChange = (e) => {                                         //when i click the save button this runs and sets the todo value
    setTodo(e.target.value)
  }

  const handleEdit = (e, id) => {                    //change this functionality to not remove the current record 
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => { return item.id != id })
    setTodos(newTodos)

    saveToLS()
  }

  const handleDelete = (e, id) => {                                     //Add confirm functionality
    // console.log(`The id is ${id}`)
    let newTodos = todos.filter(item => { return item.id != id })
    setTodos(newTodos)

    saveToLS()
  }

  const handleCheckBox = (e) => {
    // console.log(e, e.target)
    let id = e.target.name
    // console.log(id);
    // let item = todos.filter((item) => {
    //   return item.id === id
    // })

    //The other way to do this (harry bhai)
    let index = todos.findIndex(item => {
      return item.id === id
    })
    // console.log(index);
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS()
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }

  return (
    <>
      <Navbar />
      <div className="mx-3 container md:mx-auto bg-violet-100 my-5 rounded-xl p-5 min-h-[80vh] md:w-1/2">
        <h1 className='font-bold text-center text-xl' >iTask - Manage your todos at one place</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='bg-white w-full rounded-lg px-5 py-1' />
          {/* dynamically change this by the click on edit button */}
          <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-violet-800 hover:bg-violet-950 disabled:bg-violet-700 p-2 py-1 font-bold text-white rounded-md'>Save</button>
        </div>

        <input className='my-4' onChange={toggleFinished} type="checkbox" checked={showFinished} name="" id="" /> 
        <label className='mx-2' htmlFor="show">Show Finished</label>
        <div className="h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2"></div>

        <h2 className='text-lg font-bold'>Your Todo's</h2>
        <div className="todos">
          {todos.length == 0 && <div className='m-5'>No Todos to display</div>}
          {todos.map((item) => {
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex md:w-1/2 my-3 justify-between">
              <div className='flex gap-5'>
                <input onChange={handleCheckBox} type="checkbox" checked={item.isCompleted} name={item.id} id="" />
                <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 font-bold text-white rounded-md mx-1'><FaEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 font-bold text-white rounded-md mx-1'><AiFillDelete /></button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
