import React from 'react'
import title from './images/title.png'
import './rank-style.css'

function Rank() {
  return (
    <div className='rank-container'>
      <img className='rank-title' src={title} alt=""/>
      <div className='rank-heroes'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Rank
