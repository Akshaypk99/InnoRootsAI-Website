import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='left'>

      </div>
      <ul className='menu-options'>
        <li>Home</li>
        <li>About</li>
        <li>Courses</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className='sm-btns'>
        <div className='credits'>
          <div className='icons'>
            <img src='/images/footer/ig.svg' />
            <img src='/images/footer/linkedin.svg' />
            <img src='/images/footer/fb.svg' />
            <img src='/images/footer/x.svg' />
            <img src='/images/footer/yt.svg' />
          </div>
          © 2025 All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer
