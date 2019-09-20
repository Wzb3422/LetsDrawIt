import React from 'react'
import './style.css'
import two from "../../images/2.png";

function Item({ pic, item }) {
  return (
    <div className='rank-box'>
      <img className='rank-crown' src={pic} alt="pic"/>
      <div className='rank-outline'>
        <img src={`https://draw2019.oss-cn-shanghai.aliyuncs.com/picture/${item.top_file_name}?x-oss-process=image/resize,m_fill,h_182,w_280,limit_0`} alt=""/>
        <img src={`https://draw2019.oss-cn-shanghai.aliyuncs.com/picture/${item.bottom_file_name}?x-oss-process=image/resize,m_fill,h_168,w_280,limit_0`} alt=""/>
      </div>
    </div>
  )
}

export default Item
