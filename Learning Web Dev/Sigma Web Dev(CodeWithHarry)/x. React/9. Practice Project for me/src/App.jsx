import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className='topBanner'>To-Do list</div>
        <div className='toDoList'>
          <table>
            <thead>
              <th>DUE DATE</th>
              <th>PRIORITY</th>
              <th>WHAT</th>
              <th>WHO</th>
              <td className="colspace tableBorder"></td>
              <th className='colProgress'>IN PROGRESS</th>
              <td className="colspace tableBorder"></td>
              <th className='colDone'>DONE</th>
            </thead>

            <tbody>
              <tr>
                <td className='colDueDate largerFont'>6/5</td>
                <td>High</td>
                <td>Renew vehicle registeration</td>
                <td>DMV</td>
                <td className="colspace"></td>
                <td>TICK</td>
                <td className="colspace"></td>
                <td> - </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='inputContainer'>
          <input type="text" name="" id="" placeholder='Enter Todo Here!' />
        </div>

      </div>
    </>
  )
}

export default App
