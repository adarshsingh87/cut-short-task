//npm packages import
import React, { useState } from 'react'

//components import
import ProgressTracker from '../../components/progress-tracker/progress-tracker'
import NameInputs from '../../components/name-inputs-ob1/name-inputs'

// assets import
import Logo from '../../assets/logo.png'
import CongratsCheck from '../../assets/congrats-check.png'

// css imports
import './onboarding.css'
import WorkspaceInputs from '../../components/workspace-inputs/workspace-inputs'
import UseOb3 from '../../components/use-ob3/use-ob3'

const Onboarding = () => {
  const [progress, setProgress] = useState(1) // progress state
  // states for 1st step
  const [name, setName] = useState('')
  const [dpName, setDpName] = useState('')
  // states for 2nd step
  const [workspaceName, setWorkspaceName] = useState('')
  const [workspaceURL, setWorkspaceUrl] = useState('')
  const [use, setUse] = useState('self') // state for 3rd step

  // headings & sub headings for onboarding
  const onboardingHeader = [
    { heading: 'Welcome! First things first...', subHeading: 'You can always change them later.' },
    {
      heading: "Let's set up a home for all your work",
      subHeading: 'You can always create another workspace later.',
    },
    {
      heading: 'How are you planning to use Eden?',
      subHeading: "We'll streamline your setup experience accordingly.",
    },
    {
      heading: 'Congratulations, ',
      subHeading: 'You have completed onboarding, you can start using Eden!',
    },
  ]

  const handleOnboardingClick = () => {
    if (progress === 1 && (name === '' || dpName === '')) {
      window.alert('Please Fill the required fields')
    } else if (progress === 2 && workspaceName === '') {
      window.alert('Please Fill the required fields')
    } else if (progress < 4) {
      setProgress(progress + 1)
    } else {
      // function to navigate to dashboard/page after onboarding
      return
    }
  }

  return (
    <div className='onboarding__container'>
      <img src={Logo} alt='Eden Logo' className='onboarding__logo' />
      <ProgressTracker step={progress} />
      {progress === 4 ? (
        <img src={CongratsCheck} alt='Eden Congrats check' className='onboarding__congrats' />
      ) : null}
      <h1 className='onboarding__heading'>
        {onboardingHeader[progress - 1].heading} {progress === 4 ? `${dpName}!` : null}
      </h1>
      <p className='onboarding__sub-heading'>{onboardingHeader[progress - 1].subHeading}</p>
      {progress === 1 ? (
        <NameInputs name={name} setName={setName} dpName={dpName} setDpName={setDpName} />
      ) : null}
      {progress === 2 ? (
        <WorkspaceInputs
          workspaceName={workspaceName}
          setWorkspaceName={setWorkspaceName}
          workspaceURL={workspaceURL}
          setWorkspaceUrl={setWorkspaceUrl}
        />
      ) : null}
      {progress === 3 ? <UseOb3 use={use} setUse={setUse} /> : null}
      <button onClick={handleOnboardingClick} className='onboarding__c2a-btn'>
        {progress === 4 ? 'Launch Eden' : 'Create Workspace'}
      </button>
    </div>
  )
}

export default Onboarding
