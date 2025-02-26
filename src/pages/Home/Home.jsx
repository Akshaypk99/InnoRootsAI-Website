import React from 'react'
import './Home.scss'
import FadeInView from '../../components/FadeInView/FadeInView'
import Banner from '../../components/Banner/Banner'
import AboutSection from '../../components/AboutSection/AboutSection'
import OfferingsSection from '../../components/OfferingsSection/OfferingsSection'
import CourseIntroSection from '../../components/CourseIntroSection/CourseIntroSection'


const Home = () => {
  return (
    <div className='home-page'>
      <Banner />

      <div className='sec-2'>
        <AboutSection/>
        <OfferingsSection />
      </div>
      <div className='sec-3'>
        <CourseIntroSection />
      </div>
      {/* milestones */}
      <div className='sec-4'>
        {/* <FadeInView> */}
        <div className='mile-stones'>
          <div className='item'>
            <img src='/images/home/icons/students.svg' alt='students' />
            <div className='contents'>
              <div className='count'>
                800+
              </div>
              <div className='description'>
                Students
              </div>
            </div>
          </div>
          <div className='item'>
            <img src='/images/home/icons/course.svg' alt='course' />
            <div className='contents'>
              <div className='count'>
                50+
              </div>
              <div className='description'>
                Courses
              </div>
            </div>
          </div>
          <div className='item'>
            <img src='/images/home/icons/certificates.svg' alt='certificates' />
            <div className='contents'>
              <div className='count'>
                150
              </div>
              <div className='description'>
                Certificates Issued
              </div>
            </div>
          </div>
          <div className='item'>
            <img src='/images/home/icons/affiliation.svg' alt='affiliation' />
            <div className='contents'>
              <div className='count'>
                08
              </div>
              <div className='description'>
                Affiliations
              </div>
            </div>
          </div>
        </div>
        {/* </FadeInView> */}
      </div>
      <div className='sec-5'>
        <FadeInView>
          <div className='main-title'>INDUSTRIAL SUPPORT PARTNERS</div>
        </FadeInView>
        <div className='cross-div'>
          <div className='grey-div'></div>
          <div className='blue-div'></div>
        </div>
      </div>
      <div className='sec-6'>
        <FadeInView>
          <div className='main-title'>AFFILIATIONS & CERTIFICATIONS</div>
          <div className='sub-title'>Here are the prestigious affiliations and certifications we provide</div>
        </FadeInView>
        <div className='certificates'>

        </div>
      </div>
    </div>
  )
}

export default Home
