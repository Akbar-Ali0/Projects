import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <NavLink className={(e)=>{return e.isActive? "red":"" }} to='/'><li>Home</li></NavLink>
            <NavLink className={(e)=>{return e.isActive? "red":"" }} to='/About'><li>About</li></NavLink>
            <NavLink className={(e)=>{return e.isActive? "red":"" }} to='/Contact'><li>Contact</li></NavLink>
        </nav>
    </div>
  )
}

export default Navbar