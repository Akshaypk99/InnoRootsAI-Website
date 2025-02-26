import React from 'react'
import './MissionVision.scss'

const MissionVision = () => {
  return (
    <div className='mission-vision'>
      <div className="card">
        <div className="title-section">
          <img src='/images/icons/vision.svg' alt='vision' />
          <div className="main-title">
            Vision
          </div>
        </div>
        <div className="img-container">
          {/* <img /> */}
        </div>
      </div>
      <div className="card">
        <div className="title-section">
          <img src='/images/icons/mission.svg' className='mission' alt='mission' />
          <div className="main-title">
            Mission
          </div>
        </div>
        <div className="img-container">
          {/* <img /> */}
        </div>
      </div>
    </div>
  )
}

export default MissionVision
