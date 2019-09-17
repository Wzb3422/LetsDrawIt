import React, { Fragment, useEffect, useState } from 'react'
import EntryItem from './components/EntryItem'
import { get } from '../../http'
import logo from './images/logo.png'
import heart from './images/heart.png'
import img0 from './images/0.png'
import img1 from './images/1.png'
import img2 from './images/2.png'
import img3 from './images/3.png'
import img4 from './images/4.png'
import img5 from './images/5.png'
import text from './images/text.png'
import './style.css'

function Rank() {

  const numImgArr = [img0, img1, img2, img3, img4, img5]

  const [pictureList, setPictureList] = useState([])
  const [page, setPage] = useState(1)
  const [remainingLikes, setRemainingLikes] = useState(5)

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
            <img className='num' src={numImgArr[remainingLikes]} alt="one"/>
          </div>
          <img className='text' src={text} alt="text"/>
        </div>
      </div>
      <div className='rankings-box'>
        {
          pictureList.map(item => {
            return (
              <EntryItem
                key={item.id}
                item={item}
                remainingLikes={remainingLikes}
                setRemainingLikes={setRemainingLikes}
              />
            )
          })
        }
      </div>
    </Fragment>
  )
}

export default Rank
