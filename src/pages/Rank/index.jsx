import React, {Fragment, useEffect, useState} from 'react'
import Item from './components/EntryItem'
import webSocket from 'socket.io-client'
import { get } from '../../http'
import title from './images/title.png'
import one from './images/1.png'
import two from './images/2.png'
import three from './images/3.png'
import nextTurn from './images/nextTurn.png'
import './rank-style.css'

function Rank() {

  const [picList, setPicList] = useState([])

  const staticPic = [one, two, three]


  useEffect(() => {
    get('/api/like/rank').then(res => {
      console.log(res.data.pictures_data)
      setPicList(res.data.pictures_data)
    }).catch(err => {
      throw new Error(err)
    })
  }, [])

  return (
    <div className='rank-container'>
      <img className='rank-title' src={title} alt=""/>
      <div className='rank-heroes'>
        {
          picList.map((item, index) => {
            if (index < 3) {
              return (
                <Item item={item} pic={staticPic[index]} key={index}/>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default Rank
