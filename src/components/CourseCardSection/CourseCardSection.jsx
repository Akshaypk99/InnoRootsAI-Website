import React from 'react'
import './CourseCardSection.scss'
import { useNavigate } from 'react-router-dom'

const CourseCardSection = () => {
  const navigate = useNavigate()
  const courses = [
    { "title": "DIPLOMA IN ROBOTICS & ARTIFICIAL INTELLIGENCE", image_url: '' },
    { "title": "DIPLOMA IN MACHINE LEARNING & ARTIFICIAL INTELLIGENCE", image_url: '' },
  ]
  return (
    <div className='course-card-container'>
      {courses?.map((item, index) => (
        <div className="card" key={index}
          onClick={() => navigate(`/courses/${encodeURIComponent(item.title)}`)} >
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
