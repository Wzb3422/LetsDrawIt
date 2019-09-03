import React, { Fragment, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import round from './images/round.png'
import line from './images/line.png'
import './style.css'

function Graffiti({ history }) {

  const canvasRef = React.createRef()
  const [strDataUrl, setStrDataUrl] = useState('')

  const [remainingTime, setRemainingTime] = useState(30)

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
      console.log(e)
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
      history.push('/done')
    }
    return () => {
      window.clearTimeout(countDownId)
    }
  }, [remainingTime])

  const changeColor = (newColor, lineWidth = 3) => {
    const ctx = canvasRef.current.getContext('2d')
    console.log(`变成${newColor}色！`)
    console.log(ctx)
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = newColor
  }

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext('2d')
    ctx.clearRect(0, 0, canvas.height, canvas.width)
  }

  const saveCanvas = () => {
    const canvas = canvasRef.current
    setStrDataUrl(canvas.toDataURL())
    console.log(strDataUrl)
  }

  return (
    <Fragment>

      <div className='header'>
        <img className='round' src={round} alt="round"/>
        <div className='remaining'>{remainingTime}</div>
      </div>

      <img className='line' src={line} alt="line"/>

      <div className='draw-box'>
        <canvas ref={canvasRef} id='canvas' width="275" height="345"/>
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
          <div className='redo' onClick={() => {clearCanvas()}}></div>
        </div>
      </div>

    </Fragment>

  )
}

export default withRouter(Graffiti)
