//npm packages import
import React, { useState } from 'react'

//components import
import ProgressTracker from '../../components/progress-tracker/progress-tracker'

// assets import
import Logo from '../../assets/logo.png'

// css imports
import './onboarding.css'
import NameInputs from '../../components/name-inputs-ob1/name-inputs'

const Onboarding = () => {
  const [progress, setProgress] = useState(1)
  const [name, setName] = useState('')
  const [dpName,  setDpName] = useState('')

  const onboardingHeader = [
    { heading: 'Welcome! First things first...', subHeading: 'You can always change them later.' },
    { heading: "Let's set up a home for all your work", subHeading: 'You can always create another workspace later.' },
    { heading: 'How are you planning to use Eden?', subHeading: "We'll streamline your setup experience accordingly." },
    { heading: 'Congratulations, ', subHeading: 'You have completed onboarding, you can start using Eden!' },
  ]

  const handleOnboardingClick = () => {
    if (progress === '' || dpName === '') {
      window.alert('Please Fill the required fields')
    }
    else if (progress < 4) {
      setProgress(progress+1)
    } else {
      // function to navigate to dashboard/page after onboarding
      return
    }
  }

  return (
    <div className='onboarding__container'>
      <img src={Logo} alt='Eden Logo' className='onboarding__logo' />
      <ProgressTracker step={progress} />
      <h1 className='onboarding__heading'>{onboardingHeader[progress - 1].heading} {progress === 4 ? `${name}!` : null}</h1>
      <p className='onboarding__sub-heading'>{onboardingHeader[progress - 1].subHeading}</p>
      {progress === 1 ? <NameInputs name={name} setName={setName} dpName={dpName} setDpName={setDpName} /> : null}
      <button onClick={handleOnboardingClick} className='onboarding__c2a-btn'>
        Create Workspace
      </button>
    </div>
  )
}

export default Onboarding
