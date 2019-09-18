import React, { useEffect, useState, lazy, Suspense } from 'react'
import { withRouter } from 'react-router-dom'
import ok from './images/ok.png'
import rules from './images/rules.png'
import success from './images/success.png'
import './style.css'
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
  const [opponent, setOpponent] = useState('')
  const [position, setPosition] = useState('')

  useEffect(() => {

    if (status === 0) {
      setSocket(webSocket('http://101.132.107.146'))
    }

    if (status === 1) {
      console.log('开始匹配')
    }

    if (status === 2) {
      setTimeout(() => {
        history.push(`/draw?position=${position}`)
      }, 2000)
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
      if (res.message === '进入房间成功') {
        setStatus(1)
      }
    })
    socket.on('match', res => {
      if (res.message === '匹配成功') {
        setOpponent(res.data.another_user_name)
        setPosition(res.data.position)
        socket.close()
        setStatus(2)
      }
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
    const Matching = lazy(() => import('./components/Matching'))
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Matching />
      </Suspense>
    )
  }

  if (status === 2) {
    return (
      <div className='success-box'>
        <img className='success' src={success} alt="success"/>
        <div className='opponent'>{opponent}</div>
      </div>
    )
  }

}

export default withRouter(Match)
