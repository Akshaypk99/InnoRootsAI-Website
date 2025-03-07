import React from 'react'
import './CourseIntroSection.scss'
import FadeInView from '../FadeInView/FadeInView'
import { useNavigate } from 'react-router-dom'

const CourseIntroSection = () => {
  const navigate = useNavigate()
  return (
    <div className='course-intro-section'>
      <div className='left'>
        <video width="100%" autoPlay loop muted playsInline className='bg-video'>
          <source src="/videos/ai-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
        <button className='theme-btn2' onClick={()=> navigate('/courses')}>
          Explore Now
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
