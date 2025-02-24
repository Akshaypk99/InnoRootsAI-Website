import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='left'>

      </div>
      <ul className='menu-options'>
        <li>
          Home
          <img src='/images/icons/menu-arrow.svg' />
        </li>
        <li>
          About
          <img src='/images/icons/menu-arrow.svg' />
        </li>
        <li>
          Courses
          <img src='/images/icons/menu-arrow.svg' />
        </li>
        <li className='seperator'>
          Contact Us
          <img src='/images/icons/menu-arrow.svg' />
        </li>

        <li>
          Privacy Policy
          <img src='/images/icons/menu-arrow.svg' />
        </li>
        <li>
          Terms & Conditions
          <img src='/images/icons/menu-arrow.svg' />
        </li>
      </ul>
      <div className='sm-btns'>
        <div className='credits'>
          <div className='icons'>
            <img src='/images/footer/linkedin.svg' />
            <img src='/images/footer/fb.svg' />
            <img src='/images/footer/ig.svg' />

            <img src='/images/footer/sm-4.svg' />
            <img src='/images/footer/sm-5.svg' />

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
