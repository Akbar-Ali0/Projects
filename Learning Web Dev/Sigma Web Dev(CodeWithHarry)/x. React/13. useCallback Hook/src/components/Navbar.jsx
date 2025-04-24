import React from 'react'
import { memo } from 'react'

const Navbar = ({ adjective, getAdjective }) => {
    console.log("Navbar was rendered")
    return (
        <>
            <div>I am a {adjective} Navbar!</div>
            {/* <button onClick={() => { getAdjective() }}>CLICKY</button> */}
            <button onClick={() => { getAdjective() }}>{getAdjective()}</button>
        </>
    )
}

export default memo(Navbar)