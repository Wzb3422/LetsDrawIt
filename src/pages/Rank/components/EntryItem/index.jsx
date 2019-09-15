import React, { useState } from 'react'
import heart from './images/heart.png'
import 'animate.css/animate.min.css'
import './style.css'

function EntryItem() {

  const [isActivated, setIsActivated] = useState(false)

  const itemRedHeartClazz = 'item-heart gray-heart animated heartBeat'
  const itemGreyHeartClazz = 'item-heart animated rubberBand'

  const toggleLike = () => {
    if (isActivated) {
      // Liked
      setIsActivated(false)
    } else {
      // not yet
      setIsActivated(true)
    }
  }

  return (
    <div className='outline' onClick={toggleLike}>
      <img className={isActivated ? itemRedHeartClazz : itemGreyHeartClazz} src={heart} alt="heart"/>
    </div>
  )
}

export default EntryItem
