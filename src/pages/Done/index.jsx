import React, { useState } from 'react'
import done from './images/done.png'
import './style.css'

function Done() {

  const [status, setStatus] = useState(0)

  if (status === 0) {
    return (
      <img className='done' src={done} alt='done'/>
    )
  }

}

export default Done
