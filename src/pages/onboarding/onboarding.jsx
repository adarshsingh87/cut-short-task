import React, { useState } from 'react'
import ProgressTracker from '../../components/progress-tracker/progress-tracker'

import './onboarding.css'

const Onboarding = () => {
  const [progress, setProgress] = useState(1)

  return (
    <div>
      <ProgressTracker step={progress} />
      <button onClick={() => setProgress(progress+1)}>Temp</button>
    </div>
  )
}

export default Onboarding
