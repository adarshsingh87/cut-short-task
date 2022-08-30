import React from 'react'

import './name-inputs.css'

const NameInputs = (props) => {
  return (
    <div className='name-input__container'>
      <p>Full Name</p>
      <input
        type='text'
        name='name'
        value={props.name}
        onChange={(e) => props.setName(e.target.value)}
        className='name-input__inputs'
        placeholder='Steve Jobs'
      />
      <p>Display Name</p>
      <input
        type='text'
        name='name'
        value={props.dpName}
        onChange={(e) => props.setDpName(e.target.value)}
        className='name-input__inputs'
        placeholder='Steve'
      />
    </div>
  )
}

export default NameInputs
