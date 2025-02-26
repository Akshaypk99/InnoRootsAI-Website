import React from 'react'
import './Courses.scss'
import Banner from '../../components/Banner/Banner'
import OfferingsSection from '../../components/OfferingsSection/OfferingsSection'
import CourseIntroSection from '../../components/CourseIntroSection/CourseIntroSection'
import CourseCardSection from '../../components/CourseCardSection/CourseCardSection'


const Courses = () => {
  return (
    <div className='course-page'>
      <Banner />

      <div className='sec-2'>
        <OfferingsSection />
        <CourseCardSection />
      </div>
    </div>
  )
}

export default Courses
