import React, { useEffect } from 'react'
import './Home.scss'
import FadeInView from '../../components/FadeInView/FadeInView'
import Banner from '../../components/Banner/Banner'
import AboutSection from '../../components/AboutSection/AboutSection'
import OfferingsSection from '../../components/OfferingsSection/OfferingsSection'
import CourseIntroSection from '../../components/CourseIntroSection/CourseIntroSection'
import IconSlider from '../../components/IconSlider/IconSlider'


const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const INDUSTRIAL_PARTNERS = [
    "/images/industrial-partners/aws.svg",
    "/images/industrial-partners/google-colab.svg",
    "/images/industrial-partners/microsoft.svg",
    "/images/industrial-partners/nvidia.svg",
    "/images/industrial-partners/openai.svg",
    "/images/industrial-partners/open-robotics.svg",
    "/images/industrial-partners/ros-ar21.svg",
  ]

  return (
    <div className='home-page'>
      <Banner />

      <div className='sec-2'>
        <div className='container mx-auto'>
          <AboutSection />
        </div>
        <OfferingsSection />
      </div>
      <div className='sec-3'>
        <CourseIntroSection />
      </div>
      {/* milestones */}
      <div className='sec-4'>
        {/* <FadeInView> */}
        <div className="container">
          <div className='mile-stones'>
            <div className='item'>
              <img src='/images/home/icons/students.svg' alt='students' />
              <div className='contents'>
                <div className='count'>
                  7000+
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
                  3000+
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
        </div>
        {/* </FadeInView> */}
      </div>
      <div className='sec-5'>
        <FadeInView>
          <div className='main-title'>INDUSTRIAL SUPPORT PARTNERS</div>
        </FadeInView>
        <div className='cross-div'>
          <div className='grey-div'>
            <IconSlider iconList={INDUSTRIAL_PARTNERS} direction={'right'} />
          </div>
          <div className='blue-div'>
            <IconSlider iconList={INDUSTRIAL_PARTNERS} direction={'left'} />
          </div>
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
