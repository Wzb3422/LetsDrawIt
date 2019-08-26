import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import ok from './images/ok.png'
import rules from './images/rules.png'
import matching from './images/matching.png'
import success from './images/success.png'
import './style.css'

function Match({ history }) {

  /*
   * status reference
   *  0: reading the rules
   *  1: matching
   *  2: images succeeded
   *  3: images failed
   */
  const [status, setStatus] = useState(0)

  useEffect(() => {
    if (status === 1) {
      setTimeout(() => {
        setStatus(status + 1)
      }, 2000)
    }
    if (status === 2) {
      setTimeout(() => {
        history.push('/draw')
      }, 2000)
    }
  }, [status])

  if (status === 0) {
    return (
      <div className='rules-box'>
        <img className='rules' src={rules} alt="rules"/>
        <img className='ok' src={ok} alt="ok" onClick={() => {setStatus(status + 1)}} />
      </div>
    )
  }

  if (status === 1) {
    return (
      <img className='matching' src={matching} alt="matching"/>
    )
  }

  if (status === 2) {
    return (
      <div className='success-box'>
        <img className='success' src={success} alt="success"/>
        <div className='opponent'>小家园啊</div>
      </div>
    )
  }

}

export default withRouter(Match)
