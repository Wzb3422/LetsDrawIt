import React, { Fragment, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { post } from "../../../../http";
import grey from './images/grey.png'
import round from './images/round.png'
import line from './images/line.png'
import './style.css'

function Graffiti({ history }) {

  const canvasRef = React.createRef()

  const [remainingTime, setRemainingTime] = useState(30)
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d');
    let width = canvas.width, height = canvas.height;
    if (window.devicePixelRatio) {
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      canvas.height = height * window.devicePixelRatio;
      canvas.width = width * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    canvas.ontouchstart = function(e) {
      e.preventDefault()
      let offsetX = canvas.offsetLeft
      let offsetY = canvas.offsetTop
      let x = e.touches[0].clientX - offsetX
      let y = e.touches[0].clientY - offsetY
      ctx.beginPath();
      ctx.moveTo(x, y);
      canvas.ontouchmove = function(e){
        let targetX = e.touches[0].clientX - offsetX
        let targetY = e.touches[0].clientY - offsetY
        ctx.lineWidth = 3;
        ctx.lineTo(targetX,targetY);
        ctx.stroke();
      };
      canvas.ontouchend= function(e){
        canvas.onmousemove = null;
        canvas.onmouseup = null;
      };
    };
    ctx.strokeStyle = '#EC694C'
  }, [])

  useEffect(() => {
    const countDownId = window.setTimeout(() => {
      setRemainingTime(remainingTime - 1)
    }, 1000)
    if (remainingTime === 0) {
      saveCanvas()
    }
    return () => {
      window.clearTimeout(countDownId)
    }
  }, [remainingTime])

  const changeColor = (newColor, lineWidth = 3) => {
    const ctx = canvasRef.current.getContext('2d')
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = newColor
  }

  const clearCanvas = () => {
    let isToClear = window.confirm('你确定清除画布吗？')
    if (isToClear) {
      const ctx = canvasRef.current.getContext('2d')
      ctx.clearRect(0, 0, canvas.height, canvas.width)
    }
  }

  const saveCanvas = () => {
    const canvas = canvasRef.current
    post('/api/room/upload', {
      img: canvas.toDataURL(),
      format: 'png'
    }).then(res => {
      history.push(`/done?imgId=${res.data.picture_id}`)
    }).catch(err => {
      throw new Error(err)
    })
  }

  return (
    <Fragment>

      <div className='header'>
        <img className='round' src={round} alt="round"/>
        <div className='remaining'>{remainingTime}</div>
      </div>

      <img className='line' src={line} alt="line"/>

      <div className='draw-box'>
        <canvas ref={canvasRef} id='canvas' width="280" height="180"/>
        <img src={grey} alt="grey"/>
      </div>

      <div className='toolbox'>
        <ul className='color-select'>
          <li className='red' onClick={() => {changeColor('#EC694C')}}/>
          <li className='yellow' onClick={() => {changeColor('#FCEF7A')}}/>
          <li className='blue' onClick={() => {changeColor('#6882F6')}}/>
          <li className='green' onClick={() => {changeColor('#6DCE7E')}}/>
          <li className='purple' onClick={() => {changeColor('#AF6AF0')}}/>
          <li className='black' onClick={() => {changeColor('#5C5C5C')}}/>
        </ul>
        <div className='action'>
          <div className='eraser' onClick={() => changeColor('#fff', 5)}></div>
          <div className='redo' onClick={saveCanvas}></div>
        </div>
      </div>

    </Fragment>

  )
}

export default withRouter(Graffiti)
