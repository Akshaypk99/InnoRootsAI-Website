import React from 'react'
import './PrimaryButton.scss'

const PrimaryButton = ({text}) => {
  return (
    <div className='primary-btn'>
      {text}
      <div className="arrow-icon">
        <img src='/images/icons/primary-btn-arrow.svg' alt='arrow' />
      </div>
    </div>
  )
}

export default PrimaryButton
