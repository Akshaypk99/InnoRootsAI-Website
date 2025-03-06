import React, { useEffect } from 'react'
import './CourseDetails.scss'
import Banner from '../../components/Banner/Banner'
import OfferingsSection from '../../components/OfferingsSection/OfferingsSection'
import AboutSection from '../../components/AboutSection/AboutSection'
import FadeInView from '../../components/FadeInView/FadeInView'
import { useParams } from 'react-router-dom'


const CourseDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { title } = useParams();

  return (
    <div className='course-details-page'>
      <Banner />

      <div className='sec-2'>
        <div className="container mx-auto">
          <FadeInView>
            <div className='main-title'>{decodeURIComponent(title)}</div>
          </FadeInView>
          <div className='course-details-section'>
            <div className='content'>
              <FadeInView>
                <p>
                Empowering the Future of Technology Our Robotics and Artificial Intelligence (AI) Course is designed to provide participants with a comprehensive foundation in these transformative technologies. Whether you're a beginner eager to explore the basics or a professional seeking to deepen your expertise, this course is the perfect stepping stone into the exciting world of Robotics and AI.
                </p>
              </FadeInView>
            </div>
            <div className='img-container'>
              <img src='/images/home/about.jpg' alt='about-us' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails
