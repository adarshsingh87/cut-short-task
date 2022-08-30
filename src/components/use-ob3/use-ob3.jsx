import React from 'react'

import { ReactComponent as Myself } from '../../assets/indevidual.svg'
import { ReactComponent as Team } from '../../assets/team.svg'

import './use-ob3.css'

const UseOb3 = (props) => {
  return (
    <div className='use__container'>
      <div
        className={`use-card ${props.use === 'self' ? 'active-use' : null}`}
        onClick={() => props.setUse('self')}
      >
        <Myself className='use__icons' />
        <h3 className='use-card__heading'>For Myself</h3>
        <p className='use-card__sub-heading'>Write better. Think more clearly. Stay organized.</p>
      </div>
      <div
        className={`use-card ${props.use === 'team' ? 'active-use' : null}`}
        onClick={() => props.setUse('team')}
      >
        <Team className='use__icons' />
        <h3 className='use-card__heading'>With my team</h3>
        <p className='use-card__sub-heading'>Wikis, docs, tasks & projects, all in one place.</p>
      </div>
    </div>
  )
}

export default UseOb3
