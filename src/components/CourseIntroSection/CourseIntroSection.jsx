import React from 'react'
import './CourseIntroSection.scss'
import FadeInView from '../FadeInView/FadeInView'

const CourseIntroSection = () => {
  return (
    <div className='course-intro-section'>
      <div className='left'>

      </div>
      <div className='right'>
        <FadeInView>
          <div className='main-title'>
            INNOROOTS AI <br />
            COURSES
          </div>
        </FadeInView>
        <FadeInView>
          <p>
            Learn Cutting-Edge Tech: Enroll in government-certified courses in AI and Robotics to stay ahead in today’s tech-driven world.
          </p>
        </FadeInView>
        <button className='theme-btn2'>
          Explore
        </button>
        <div className='overlay-vector'>
          <div className='triangle'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseIntroSection
