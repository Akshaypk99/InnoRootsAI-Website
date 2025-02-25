import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='left'>
        <div className="text">
          Discover the <br/>
          Future with InnoRoots AI
        </div>
        <div className='explore-btn'>
          Explore Now
          <div className="arrow-icon">
            <img src='/images/icons/button-arrow.svg' alt='arrow'/>
          </div>
        </div>
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
      <div className="right">
        <div className="info">
          <div> Infolks Pvt. Ltd.</div>
          <div> Infolks Tower, Mannarkkad, Kerala, India, 678583</div>
        </div>
        <div className="career">
          <div> Career : +91 70258 89922</div>
          <div> Career : hr@infolks.in</div>
        </div>
        <div className='sm-btns'>
          <div className='credits'>
            <div className='icons'>
              <img src='/images/footer/sm-5.svg' />
              <img src='/images/footer/x.svg' />
              <img src='/images/footer/yt.svg' />
              <img src='/images/footer/linkedin.svg' />
              <img src='/images/footer/fb.svg' />
              <img src='/images/footer/ig.svg' />
              <img src='/images/footer/sm-4.svg' />
            </div>
            © 2025 All rights reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
