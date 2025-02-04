import { useState, useEffect } from 'react'
import './App.css'



//Check Harry bhai's solution - different from mine.


function App() {
  const [data, setData] = useState([{
    userID: "",
    id: "",
    title: "",
    body: ""
  }])
  //what if i use the other technique?
  //if i remove the square brackets -> map is undefined - because its an array function?

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((Response) => { return Response.json() })
      .then((incdata) => { setData(incdata) })
  }, [])
  //if i remove this [] then it does fetch multiple times

  //what if i want it to wait for useEffect to complete then run how will i do that?
  //This will log in the first render null but in the next render it will give the actual value.
  // console.log(data)
  // console.log(data[0].title)

  return (
    <>
      <div className='cardWrapper'>
        {data.map((single) => {
          return (
            <div key={single.id} className="cardContainer">
              <h3 className="cardTitle">{single.title}</h3>
              <p className="cardBody">{single.body}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default App
