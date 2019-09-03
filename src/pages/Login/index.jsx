import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import './style.css'
import logo from './images/logo.png'
import play from './images/play.png'
import ipt from './images/ipt.png'
import { post } from "../../http";

function Login({ history }) {

  const [studentId, setStudentId] = useState('')
  const [name, setName] = useState('')

  const onPlay = () => {
    post('/api/auth',{
      student_id: studentId,
      name
    }).then(res => {
      localStorage.setItem('token', res.data.token)
      history.push('/match')
    }).catch(err => {
      throw new Error(err)
    })
  }

  return (
    <div className='wrapper'>
      <img className='logo' src={logo} alt='logo'/>
      <div className='ipt-box'>
        <img className='ipt-frame' src={ipt} alt='ipt' />
        <input className='ipt ipt-name' type="text" value={name} onChange={e => {setName(e.target.value)}}/>
        <input className='ipt ipt-username' type="text" value={studentId} onChange={e => {setStudentId(e.target.value)}}/>
      </div>
      <img className='play' src={play} alt="play" onClick={onPlay} />
    </div>
  )
}

export default withRouter(Login)
