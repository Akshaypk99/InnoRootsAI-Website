import React from 'react'
import './MissionVision.scss'
import missionIcon from "../../assets/images/icons/mission.svg"
import visionIcon from "../../assets/images/icons/vision.svg"

const MissionVision = () => {
  return (
    <div className='mission-vision'>
      <div className="card">
        <div className="title-section">
          <img src={visionIcon} alt='vision' />
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
          <img src={missionIcon} className='mission' alt='mission' />
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
