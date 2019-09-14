import React, { Fragment, useEffect, useState } from 'react'
import EntryItem from './components/EntryItem'
import { get } from '../../http'
import logo from './images/logo.png'
import heart from './images/heart.png'
import one from './images/1.png'
import text from './images/text.png'
import './style.css'

function Rank() {

  const [pictureList, setPictureList] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    get('/api/picture/all', {
      page
    }).then(res => {
      console.log(res.data.pictures_data)
      setPictureList([...res.data.pictures_data])
    }).catch(err => {
      throw new Error(err)
    })
  }, [page])

  return (
    <Fragment>
      <div className='header'>
        <img className='logo' src={logo} alt="logo"/>
        <div className='header-right'>
          <div className='hearts-box'>
            <img className='heart' src={heart} alt="heart"/>
            <img className='num' src={one} alt="one"/>
          </div>
          <img className='text' src={text} alt="text"/>
        </div>
      </div>
      <div className='rankings-box'>
        {
          pictureList.map(item => {
            return (
              <EntryItem key={item.id} />
            )
          })
        }
        <EntryItem />
      </div>
    </Fragment>
  )
}

export default Rank
