import React, { Fragment, useState } from 'react'
import ok from 'Assets/images/Match/ok.png'
import rules from 'Assets/images/Match/rules.png'
import matching from 'Assets/images/Match/matching.png'
import success from 'Assets/images/Match/success.png'
import './style.css'

function Match() {

  /*
   * status reference
   *  0: reading the rules
   *  1: matching
   *  2: Match succeeded
   *  3: Match failed
   */
  const [status, setStatus] = useState(0)

  if (status === 0) {
    return (
      <div className='rules-box'>
        <img className='rules' src={rules} alt="rules"/>
        <img className='ok' src={ok} alt="ok" onClick={() => {setStatus(status + 1)}} />
      </div>
    )
  }

  if (status === 1) {
    setTimeout(() => {
      setStatus(status + 1)
    }, 2000)
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

export default Match
