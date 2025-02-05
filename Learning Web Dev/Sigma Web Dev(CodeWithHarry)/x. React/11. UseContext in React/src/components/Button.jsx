import React, { useContext } from 'react'
import Component1 from './Component1'
import { CounterContext } from '../Context/Context'

const Button = () => {
    const value = useContext(CounterContext)

    return (
        <div>
            <button onClick={() => { value.setCount((count) => { return count = count + 1 }) }}>
                <span><Component1 /></span>I am a button
            </button>
        </div>
    )
}

export default Button