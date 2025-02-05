import React, { useContext } from 'react'
import { CounterContext } from '../Context/Context'


const Component1 = () => {
  const value = useContext(CounterContext)
  return (
    <div>
      {value.count}
    </div>
  )
}

export default Component1