// import { useState } from 'react'
// import './App.css'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import User from '../components/User'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar />
        <Home />
      </>
    },
    {
      path: "/Contact",
      element: <>
        <Navbar /><Contact />
      </>
    },
    {
      path: "/About",
      element: <>
        <Navbar /><About />
      </>
    },
    {
      path: "/user/:username",
      element: <>
        <Navbar /><User />
      </>
    }
  ])

  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App
