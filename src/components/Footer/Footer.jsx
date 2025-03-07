import React from 'react'
import { useNavigate } from "react-router-dom";
import './Footer.scss'
import ExploreButton from '../ExploreButton/ExploreButton';
import logo from '../../assets/logo.svg'
import menuArrow from '../../assets/images/icons/menu-arrow.svg'
import FOOTER_SM_ICONS from '../../constants/images';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className='footer'>
      <div className='left'>
        <div className="logo-container">
          <img className='logo' src={logo} alt='logo' />
        </div>
        <div className="text">
          Discover the <br />
          Future with InnoRoots AI
        </div>
        {/* <div className='explore-btn'>
          Explore Now
          <div className="arrow-icon">
            <img src='/images/icons/button-arrow.svg' alt='arrow'/>
          </div>
        </div> */}
        <ExploreButton text={"Explore Now"} />
      </div>
      <ul className='menu-options'>
        <li onClick={() => { navigate('/') }}>
          Home
          <img src={menuArrow} />
        </li>
        <li onClick={() => { navigate('/about-us') }}>
          About
          <img src={menuArrow} />
        </li>
        <li onClick={() => { navigate('/courses') }}>
          Courses
          <img src={menuArrow} />
        </li>
        <li className='seperator' onClick={() => { navigate('/contact') }}>
          Contact Us
          <img src={menuArrow} />
        </li>

        <li>
          Privacy Policy
          <img src={menuArrow} />
        </li>
        <li>
          Terms & Conditions
          <img src={menuArrow} />
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
              <img src={FOOTER_SM_ICONS.sm5} alt="sm-5" />
              <img src={FOOTER_SM_ICONS.xIcon} alt="X" />
              <img src={FOOTER_SM_ICONS.yt} alt="YouTube" />
              <img src={FOOTER_SM_ICONS.linkedin} alt="LinkedIn" />
              <img src={FOOTER_SM_ICONS.fb} alt="Facebook" />
              <img src={FOOTER_SM_ICONS.ig} alt="Instagram" />
              <img src={FOOTER_SM_ICONS.sm4} alt="sm-4" />
            </div>
            © 2025 All rights reserved
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
