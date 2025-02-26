import React from 'react'
import './AboutSection.scss'
import FadeInView from '../FadeInView/FadeInView'

const AboutSection = () => {
  return (
    <div className='about-us-section'>
      <div className='content'>
        <FadeInView>
          <div className='main-title'>ABOUT US</div>
        </FadeInView>
        <FadeInView>
          <p>InnoRootsAI is a pioneering initiative in robotics and AI education, dedicated to fostering innovation, creativity, and technological expertise. As a provider of comprehensive training solutions, we aim to equip individuals and communities with the skills and knowledge needed to thrive in the rapidly evolving fields of robotics and artificial intelligence. At InnoRoots, we believe that technology should be an enabler for everyone, regardless of background or expertise.</p>
        </FadeInView>
        <button className='theme-btn'>
          Learn more
        </button>
      </div>
      <div className='img-container'>
        {/* <img src='' alt='about-us' /> */}
      </div>
    </div>
  )
}

export default AboutSection
