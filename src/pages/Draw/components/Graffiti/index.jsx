import React, { Fragment, useEffect, useState } from 'react'
import round from './images/round.png'
import remaining from './images/remaining.png'
import line from './images/line.png'
import './style.css'

function Graffiti() {

  const canvasRef = React.createRef()
  let ctx = null

  useEffect(() => {
    const canvas = canvasRef.current
    ctx = canvas.getContext('2d');
    let width = canvas.width, height = canvas.height;
    if (window.devicePixelRatio) {
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      canvas.height = height * window.devicePixelRatio;
      canvas.width = width * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    canvas.ontouchstart = function(e) {
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

  const changeColor = (newColor, lineWidth = 3) => {
    console.log(`变成${newColor}色！`)
    console.log(ctx)
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = newColor
  }

  const clearCanvas = () => {
    ctx.ctx.clearRect(0,0,canvas.width,canvas.height);
  }

  return (
    <Fragment>

      <div className='header'>
        <img className='round' src={round} alt="round"/>
        <img className='remaining' src={remaining} alt="remaining"/>
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
          <div className='redo'></div>
        </div>
      </div>

    </Fragment>

  )
}

export default Graffiti
