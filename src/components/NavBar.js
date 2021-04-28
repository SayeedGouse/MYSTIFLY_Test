import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='header-container'>
      <div className='header'>
        <Link to='/search' className='logo'>
          MyFlights
        </Link>
        <span>Logout</span>
      </div>
    </div>
  )
}

export default NavBar
