import React, { Fragment } from 'react'
import logo from './images/logo.png'
import heart from './images/heart.png'
import one from './images/1.png'
import './style.css'

function Rank() {
  return (
    <Fragment>
      <div className='header'>
        <img className='logo' src={logo} alt="logo"/>
        <div className='header-right'>
          <div className='hearts-box'>
            <img className='heart' src={heart} alt="heart"/>
            <img className='num' src={one} alt="one"/>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Rank
