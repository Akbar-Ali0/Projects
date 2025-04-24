import './App.css'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, multiply } from './counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Counter value is: {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())}>*2</button>
      </div>
    </>
  )
}

export default App
