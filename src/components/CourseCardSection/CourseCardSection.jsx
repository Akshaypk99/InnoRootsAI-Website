import React from 'react'
import './CourseCardSection.scss'

const CourseCardSection = () => {
  const courses = [
    {"title": "DIPLOMA IN ROBOTICS & ARTIFICIAL INTELLIGENCE", image_url: ''},
    {"title": "DIPLOMA IN MACHINE LEARNING & ARTIFICIAL INTELLIGENCE", image_url: ''},
  ]
  return (
    <div className='course-card-container'>
      {courses?.map((item, index) => (
      <div className="card">
        <div className="title-section">
          <div className="main-title">
            {item.title}
          </div>
        </div>
        <div className="img-container">
          {/* <img /> */}
        </div>
      </div>
      ))}
    </div>
  )
}

export default CourseCardSection
