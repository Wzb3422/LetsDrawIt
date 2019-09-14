import React, { Fragment ,useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import checkOthers from './images/checkOthers.png'
import check from './images/check.png'
import { get } from "../../http";
import './style.css'

function Done() {

  const params = (new URL(document.location)).searchParams
  const imgId = params.get("imgId")

  const [status, setStatus] = useState(0)
  const [imgList, setImgList] = useState([])
  const [nameList, setNameList] = useState([])

  useEffect(() => {
    get('/api/picture', {
      id: imgId
    }).then(res => {
      console.log(res)
      setImgList([res.data.top_file_name, res.data.bottom_file_name])
      setNameList([res.data.name1, res.data.name2])
    }).catch(err => {
      throw new Error(err)
    })
  }, [])

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
        <div className='title'>{nameList[0]}和{nameList[1]}的惊世之作</div>
        <div className='sub-title'>诞生了</div>
        <div className="outline">
          <img src={`https://draw2019.oss-cn-shanghai.aliyuncs.com/picture/${imgList[0]}?x-oss-process=image/resize,m_fill,h_176,w_274,limit_0`} alt=""/>
          <img src={`https://draw2019.oss-cn-shanghai.aliyuncs.com/picture/${imgList[1]}?x-oss-process=image/resize,m_fill,h_168,w_274,limit_0`} alt=""/>
        </div>
        <Link to='/rank'>
          <img className='check-others' src={checkOthers} alt="checkOthers" />
        </Link>
      </Fragment>
    )
  }

}

export default Done
