import React, { Fragment ,useState } from 'react'
import check from './images/check.png'
import './style.css'

function Done() {

  const params = (new URL(document.location)).searchParams
  const imgId = params.get("imgId")

  const [status, setStatus] = useState(0)

  if (status === 0) {
    console.log('params', imgId)
    return (
      <div className='done'>
        <img className='check' src={check} alt="check" onClick={() => {setStatus(1)}}/>
      </div>
    )
  }

  if (status === 1) {
    return (
      <Fragment>
        <div className='title'>xxx和xxx的惊世之作</div>
        <div className='sub-title'>诞生了</div>
        <div className="outline"></div>
      </Fragment>
    )
  }

}

export default Done
