import React from 'react'

import './workspace-inputs.css'

const WorkspaceInputs = (props) => {
  return (
    <div className='name-input__container'>
      <p>Workspace Name</p>
      <input
        type='text'
        name='workspace name'
        value={props.workspaceName}
        onChange={(e) => props.setWorkspaceName(e.target.value)}
        className='name-input__inputs'
        placeholder='Eden'
      />
      <p>
        Workspace URL <sub style={{ color: '#a7b1c5' }}>(optional)</sub>
      </p>
      <div className='workspace-input__url-container'>
        <div className='workspace-url__prefix'>www.eden.com/</div>
        <input
          type='text'
          name='workspace url'
          value={props.dpName}
          onChange={(e) => props.setDpName(e.target.value)}
          className='name-input__inputs'
          placeholder='Example'
        />
      </div>
    </div>
  )
}

export default WorkspaceInputs
