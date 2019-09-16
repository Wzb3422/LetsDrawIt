import React, { useState } from 'react'
import heart from './images/heart.png'
import 'animate.css/animate.min.css'
import './style.css'

function EntryItem({ item, setRemainingLikes, remainingLikes }) {

  const [isActivated, setIsActivated] = useState(false)

  const itemRedHeartClazz = 'item-heart gray-heart animated heartBeat'
  const itemGreyHeartClazz = 'item-heart animated rubberBand'

  const toggleLike = () => {
    if (isActivated) {
      // Liked
      setRemainingLikes(remainingLikes + 1)
      setIsActivated(false)
    } else {
      // not yet
      if (remainingLikes > 0) {
        // like
        setRemainingLikes(remainingLikes - 1)
        setIsActivated(true)
      } else {
        // likes exceeded
        alert('点赞次数用光了')
      }
    }
  }

  return (
    <div className='rank-outline' onClick={toggleLike}>
      <img className={isActivated ? itemRedHeartClazz : itemGreyHeartClazz} src={heart} alt="heart"/>
      <img className='rank-img' src={`https://draw2019.oss-cn-shanghai.aliyuncs.com/picture/${item.top_file_name}`} alt="topImg"/>
      <img className='rank-img' src={`https://draw2019.oss-cn-shanghai.aliyuncs.com/picture/${item.bottom_file_name}`} alt="bottomImg"/>
    </div>
  )
}

export default EntryItem
