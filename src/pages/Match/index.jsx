import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import ok from './images/ok.png'
import rules from './images/rules.png'
import success from './images/success.png'
import './style.css'
import Matching from './components/Matching'
import webSocket from 'socket.io-client'

function Match({ history }) {

  /*
   * status reference
   *  0: reading the rules
   *  1: matching
   *  2: images succeeded
   *  3: images failed
   */

  const [status, setStatus] = useState(0)
  const [socket, setSocket] = useState(null)

  useEffect(() => {

    if (status === 0) {
      setSocket(webSocket('http://localhost:3000'))
    }

    if (status === 1) {

    }

    if (status === 2) {
      setTimeout(() => {
        history.push('/draw')
      }, 2000)
    }
    return () => {
      socket.close()
    }
  }, [status])

  // WebSocket
  useEffect(() => {
    if (socket) {
      console.log('connected')
      console.log(socket)
      wsInit()
    }
  }, [socket])

  const wsInit = () => {
    socket.on('connect', () => {
      console.log(`Ws connected as id ${socket.id}`)
    })
    socket.on('join', res => {
      console.log(res)
    })
    socket.on('match', res => {
      console.log(res)
    })
    socket.on('getMessage', message => {
      console.log(message)
    })
  }

  const onGotItClick = () => {
    console.log('hello world')
    socket.emit('join', `{
      "token": "${localStorage.getItem('token')}"
    }`, data => {
      console.log(data)
    })
  }

  if (status === 0) {
    return (
      <div className='rules-box'>
        <img className='rules' src={rules} alt="rules"/>
        <img className='ok' src={ok} alt="ok" onClick={onGotItClick} />
      </div>
    )
  }

  if (status === 1) {
    return (
      <Matching />
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
