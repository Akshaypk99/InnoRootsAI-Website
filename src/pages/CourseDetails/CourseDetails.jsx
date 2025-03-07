import React, { useEffect } from 'react'
import './CourseDetails.scss'
import Banner from '../../components/Banner/Banner'
import OfferingsSection from '../../components/OfferingsSection/OfferingsSection'
import AboutSection from '../../components/AboutSection/AboutSection'
import FadeInView from '../../components/FadeInView/FadeInView'
import { useParams } from 'react-router-dom'
import bulletIcon from '../../assets/images/icons/list-bullet.svg'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'

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
          <div className="container course-details-section">
            <div className="first-row">
              <div className="description">
                <div className="desc-title">
                  Course Description:
                </div>
                <p>
                  This immersive program covers the core principles of robotics and artificial intelligence, with a strong emphasis on hands-on learning. Participants will learn to build, program, and control robots while integrating AI for navigation and vision. The course includes modern tools like ROS (Robot Operating System) for scalable robotics solutions.
                </p>
                <div className="mt-2">
                  <div className="sub-heading">
                    Key Benefits & Learning Outcomes:
                  </div>
                  <div className="key-list">
                    <div className="item">
                      <img src={bulletIcon} alt='icon' />
                      <p>
                        Design, program, and assemble robots from scratch.
                      </p>
                    </div>
                    <div className="item">
                      <img src={bulletIcon} alt='icon' />
                      <p>
                        Master robotics control and AI integration for navigation and vision.
                      </p>
                    </div>
                    <div className="item">
                      <img src={bulletIcon} alt='icon' />
                      <p>
                        Build functional robots, including line-following, robotic arm , obstacle-avoiding, and voice-controlled robots.
                      </p>
                    </div>
                    <div className="item">
                      <img src={bulletIcon} alt='icon' />
                      <p>
                        Gain experience with ROS to manage complex robotics systems.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="sub-heading">
                    Tech Stacks Covered:
                  </div>
                  <div className="key-list">
                    <div className="item">
                      <img src={bulletIcon} alt='icon' />
                      <p>
                        Programming: Python, Arduino IDE, C++
                      </p>
                    </div>
                    <div className="item">
                      <img src={bulletIcon} alt='icon' />
                      <p>
                        Hardware: Arduino microcontrollers, ESP32, Jetson Nano, Raspberry Pi, sensors (ultrasonic, motion, etc.), actuators, motors
                      </p>
                    </div>
                    <div className="item">
                      <img src={bulletIcon} alt='icon' />
                      <p>
                        Libraries/Tools: OpenCV, PyTorch, ROS (Robot Operating System)
                      </p>
                    </div>
                    <div className="item">
                      <img src={bulletIcon} alt='icon' />
                      <p>
                        Platforms: Raspberry Pi, NVIDIA Jetson Nano, Arduino, ESP32
                      </p>
                    </div>
                    <div className="item">
                      <img src={bulletIcon} alt='icon' />
                      <p>
                        Simulators: Gazebo for testing robotics designs
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="image-container">
              </div>
            </div>

            <div className="second-row">
              <div className="form-section">
                <form >
                  <div className="form-group">
                    <input type="text" id="name" placeholder="Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" id="email" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" id="place" placeholder="Place" required />
                  </div>
                  <div className="form-group">
                    <input type="text" id="phone_number" placeholder="Contact Number" required />
                  </div>
                  <div className='btn-container'>
                    <PrimaryButton text={'SUBMIT'} />
                  </div>
                </form>
              </div>
              <div className="duration">
                <div className="item">
                  CLASS DURATION <br />
                  10 MONTHS
                </div>
                <div className="item">
                  ON JOB TRAINING <br />
                  12 MONTHS
                </div>
                <div className="item">
                  TOTAL DURATION <br />
                  22 MONTHS
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <PrimaryButton text={'CALL NOW'} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CourseDetails
