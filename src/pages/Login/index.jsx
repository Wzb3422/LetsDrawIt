import React from 'react'
import { withRouter } from 'react-router-dom'
import './style.css'
import logo from './images/logo.png'
import play from './images/play.png'
import ipt from './images/ipt.png'
import toast from '../../lib/toast'

function Login({ history }) {

  const onPlay = () => {
    history.push('/match')
  }

  return (
    <div className='wrapper'>
      <img className='logo' src={logo} alt='logo'/>
      <div className='ipt-box'>
        <img className='ipt-frame' src={ipt} alt='ipt' />
        <input className='ipt ipt-name' type="text"/>
        <input className='ipt ipt-username' type="text"/>
      </div>
      <img className='play' src={play} alt="play" onClick={toast} />
    </div>
  )
}

export default withRouter(Login)
