import React from 'react'
import './Home.scss'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import FadeInView from '../../components/FadeInView/FadeInView'


const Home = () => {
  return (
    <div className='home-page'>
      <NavBar />
      <div className='banner'>
        <div className='title'>
          AN INVITATION TO <br /> DREAM BIGGER
        </div>
      </div>

      <div className='sec-2'>
        <div className='about-us'>
          <div className='content'>
            <FadeInView>
              <div className='main-title'>ABOUT US</div>
            </FadeInView>
            <p>InnoRootsAI is a pioneering initiative in robotics and AI education, dedicated to fostering innovation, creativity, and technological expertise. As a provider of comprehensive training solutions, we aim to equip individuals and communities with the skills and knowledge needed to thrive in the rapidly evolving fields of robotics and artificial intelligence. At InnoRoots, we believe that technology should be an enabler for everyone, regardless of background or expertise.</p>
            <button className='theme-btn'>
              Learn more
            </button>
          </div>
          <div className='img-container'>
            <img src='' alt='about-us' />
          </div>
        </div>
        <div className='offerings'>
          <FadeInView>
            <div className='sub-title'>We are offering AI, ML and Robotics</div>
            <h5>COURSES</h5>
          </FadeInView>
          <p>
            Step into the forefront of intelligent technology with InnoRootsAI, your trusted provider for
            Robotics and AI training. Explore cutting-edge AI, Machine Learning, and Robotics courses,
            designed to spark innovation and empower learners at every level. At InnoRootsAI, we’re not just shaping minds—we’re shaping the future.
          </p>
        </div>
      </div>
      <div className='sec-3'>
        <div className='left'>

        </div>
        <div className='right'>
          <FadeInView>
            <div className='main-title'>
              INNOROOTS AI <br />
              COURSES
            </div>
          </FadeInView>
          <p>
            Learn Cutting-Edge Tech: Enroll in government-certified courses in AI and Robotics to stay ahead in today’s tech-driven world.
          </p>
          <button className='theme-btn2'>
            Explore
          </button>
          <div className='overlay-vector'>
            <div className='triangle'>

            </div>
          </div>
        </div>
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


      <Footer />
    </div>
  )
}

export default Home
