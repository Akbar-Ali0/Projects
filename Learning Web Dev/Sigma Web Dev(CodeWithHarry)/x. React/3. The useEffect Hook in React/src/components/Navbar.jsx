import React from 'react'
import { useEffect } from 'react'

function Navbar({ color }) {

    // useEffect(() => {
    //   alert("The Navbar color was changed")
    // }, [color])

    //Example of Cleanup Function
    useEffect(() => {
        alert("This is the first render of Navbar.JSX")
        return () => {
            alert("Component was unmounted")
        }
    }, [])

    return (
        <div>
            Navbar color is {color}
        </div>
    )
}


export default Navbar