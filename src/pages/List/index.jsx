import React, { lazy, Suspense } from 'react'
import './list-style.css'

const ListItem = lazy(() => import('./ListItem/index.jsx'))

const List = () => {

  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1,1 ,1 ,1 ,1 ,1 , 1, 1, 1,1 ,1 ,1 ,1 ,11, 1, 1,1 ,1 ,1 ,1 ,1 ,1]

  return (
    <div className='list-container'>
      <div className='list-title'>Pick 你心中的 「优秀画作」</div>
      <div className='list-box'>
        <Suspense fallback={<div>Loading...</div>}>
          {
            arr.map((item, index) => {
              return (
                <ListItem key={index}/>
              )
            })
          }
        </Suspense>

      </div>
    </div>
  )
}

export default List
