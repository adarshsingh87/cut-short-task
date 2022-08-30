import React from 'react'

import './progress-tracker.css'

const ProgressTracker = (props) => {
  return (
    <div className='progress-tracker__container'>
      <div className='progress-tracker__number color-animation-class animation-start'>1</div>
      <div className='color-animation-class-line animation-start' />
      <div className={`color-animation-class-line ${props.step > 1 ? 'animation-start' : null}`} />
      <div
        className={`progress-tracker__number color-animation-class ${
          props.step > 1 ? 'animation-start' : null
        }`}
      >
        2
      </div>
      <div
        className={`color-animation-class-line ${
          props.step > 1 ? 'animation-start delay2s' : null
        }`}
      />
      <div className={`color-animation-class-line ${props.step > 2 ? 'animation-start' : null}`} />
      <div
        className={`progress-tracker__number color-animation-class ${
          props.step > 2 ? 'animation-start' : null
        }`}
      >
        3
      </div>
      <div
        className={`color-animation-class-line ${
          props.step > 2 ? 'animation-start delay2s' : null
        }`}
      />
      <div className={`color-animation-class-line ${props.step > 3 ? 'animation-start' : null}`} />
      <div
        className={`progress-tracker__number color-animation-class ${
          props.step > 3 ? 'animation-start' : null
        }`}
      >
        4
      </div>
    </div>
  )
}

export default ProgressTracker
