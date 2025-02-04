import { useState } from 'react'
import './App.css'

function App() {
  // const [form, setForm] = useState({
  //   email: "",
  //   phone: ""
  // })
  const [form, setForm] = useState("")

  const handleHover = () => {
    alert("Mouse was hovered on the input")
  }

  const handleChange = (e) => {
    console.log(e.target)
    // console.log(e.target.type)
    // console.log(e.target.name)

    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* <input type="text" name='email' className='email' value={form.email} onChange={handleChange} /> */}
      {/* <input type="text" name='phone' className='phone' value={form.phone} onChange={handleChange} /> */}

      <input type="text" name='email' className='email' value={form?.email} onChange={handleChange} />
      <input type="text" name='phone' className='phone' value={form?.phone} onChange={handleChange} />

      {/* <input type="text" name='email' className='email' value={form.email ? form.email : ""} onChange={handleChange} /> */}
      {/* <input type="text" name='phone' className='phone' value={form.phone ? form.phone : ""} onChange={handleChange} /> */}
    </>
  )
}

export default App