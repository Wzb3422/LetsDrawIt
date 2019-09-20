import React from 'react'
import title from './images/title.png'
import one from './images/1.png'
import two from './images/2.png'
import three from './images/3.png'
import nextTurn from './images/nextTurn.png'
import './rank-style.css'

function Rank() {
  return (
    <div className='rank-container'>
      <img className='rank-title' src={title} alt=""/>
      <div className='rank-heroes'>
        <div className='rank-box'>
          <img className='rank-crown' src={two} alt=""/>
          <div className='rank-outline'></div>
        </div>
        <div className='rank-box'>
          <img className='rank-crown' src={one} alt=""/>
          <div className='rank-outline'></div>
        </div>
        <div className='rank-box'>
          <img className='rank-crown' src={three} alt=""/>
          <div className='rank-outline'></div>
        </div>
      </div>
      <img className='next-turn' src={nextTurn} alt=""/>
    </div>
  )
}

export default Rank
