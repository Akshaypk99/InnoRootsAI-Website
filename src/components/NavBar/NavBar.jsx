import React from 'react'
import './NavBar.scss'
import logo from '../../assets/logo.svg'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        {/* <img className='' src={logo} /> */}
        {/* <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul> */}
      </div>
      <div className='navbar-right'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
