import React, { useState, useEffect } from 'react'
import coder from './images/coder.png'
import './style.css'

function Requirement({ setStatus }) {

  const [countDown, setCountDown] = useState(5)

  useEffect(() => {
    if (countDown > 0) {
      setTimeout(() => {
        setCountDown(countDown - 1)
      }, 1000)
    }
    if (countDown === 0) {
      setStatus(1)
    }
  }, [countDown])

  return (
    <div className='req-box'>
      <div className='req-head'>
        <span className='quote hugo'>请画：</span>
        <span className='count-down hugo'>{countDown}</span>
      </div>
      <div className='req-img'>
        <img src={coder} alt="coder"/>
      </div>
      <div className='req-bottom hugo'>
        <div className='ques hugo'>「一只程序员」 </div>
        <div className='part hugo'>的上半部</div>
      </div>
    </div>
  )
}

export default Requirement
