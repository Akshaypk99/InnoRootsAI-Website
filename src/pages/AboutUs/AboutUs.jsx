import React from 'react'
import './AboutUs.scss'
import FadeInView from '../../components/FadeInView/FadeInView'
import Banner from '../../components/Banner/Banner'
import AboutSection from '../../components/AboutSection/AboutSection'
import OfferingsSection from '../../components/OfferingsSection/OfferingsSection'
import MissionVision from '../../components/MissionVision/MissionVision'
import CourseIntroSection from '../../components/CourseIntroSection/CourseIntroSection'


const AboutUs = () => {
  return (
    <div className='about-us-page'>
      <Banner />

      <div className='sec-2'>
        <AboutSection />
        <MissionVision />
        <OfferingsSection />
      </div>

      <div className='sec-3'>
        <CourseIntroSection />
      </div>

    </div>
  )
}

export default AboutUs
