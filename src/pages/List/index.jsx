import React, { lazy, Suspense, useEffect, useState } from 'react'
import axios from 'axios'
import end from './images/end.png'
import io from 'socket.io-client'
import './list-style.css'

const ListItem = lazy(() => import('./ListItem/index.jsx'))

const List = () => {

  const [socket, setSocket] = useState(null)

  // websocket
  useEffect(() => {
    setSocket(io('http://localhost:3000'))
  }, [])

  // xhr
  useEffect(() => {
    axios.get('http://101.132.107.146/api/like/rank').then(res => {
      console.log(res)
    }).catch(err => {
      throw new Error(err)
    })
  })

  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1,1 ,1 ,1 ,1 ,1 , 1, 1, 1,1 ,1 ,1 ,1 ,11, 1, 1,1 ,1 ,1 ,1 ,1 ,1]

  return (
    <div className='list-container'>
      <div className='list-title hugo'>Pick 你心中的 「优秀画作」</div>
      <div className='list-box'>
        <Suspense fallback={<div>Loading...</div>}>
          {
            arr.map((item, index) => {
              return (
                <ListItem key={index}/>
              )
            })
          }
        </Suspense>
      </div>
      <img className='end-button' src={end} alt="end"/>
    </div>
  )
}

export default List
