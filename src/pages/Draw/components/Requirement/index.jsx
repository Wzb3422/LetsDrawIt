import React, { useState, useEffect } from 'react'
import coder from './images/coder.png'
import doll from './images/doll.png'
import cat from './images/cat.png'
import './style.css'

function Requirement({ setStatus }) {

  const [countDown, setCountDown] = useState(5)
  const [question, setQuestion] = useState('')
  const [isTop, setIsTop] = useState(true)

  const quesList = ['小家园', '程序猿', '猫']
  const imgList = [doll, coder, cat]

  const [quesId, setQuesId] = useState(0)

  useEffect(() => {
    const params = (new URL(document.location)).searchParams
    const position = params.get("position")
    const quesIndex = params.get("quesId")
    setQuesId(quesIndex - 1)
    setQuestion(quesList[quesIndex - 1])
    position === 'top' ? (setIsTop(true)) : (setIsTop(false))
  }, [])

  useEffect(() => {
    if (countDown > 0) {
      setTimeout(() => {
        setCountDown(countDown - 1)
      }, 1000)
    }
    if (countDown === 0) {
      setStatus(1)
    }
  }, [countDown])

  return (
    <div className='req-box'>
      <div className='req-head'>
        <span className='quote hugo'>请画：</span>
        <span className='count-down hugo'>{countDown}</span>
      </div>
      <div className='req-img'>
        <img src={imgList[quesId]} alt="coder"/>
      </div>
      <div className='req-bottom hugo'>
        <div className='ques hugo'>「{question}」 </div>
        <div className='part hugo'>的{isTop ? '上' : '下'}半部</div>
      </div>
    </div>
  )
}

export default Requirement
