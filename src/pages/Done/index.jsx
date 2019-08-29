import React, { Fragment ,useState } from 'react'
import check from './images/check.png'
import './style.css'

function Done() {

  const [status, setStatus] = useState(0)

  if (status === 0) {
    return (
      <div className='done'>
        <img className='check' src={check} alt="check" onClick={() => {setStatus(1)}}/>
      </div>
    )
  }

  if (status === 1) {
    return (
      <Fragment>
        <div>xxx和xxx的惊世之</div>
      </Fragment>
    )
  }

}

export default Done
