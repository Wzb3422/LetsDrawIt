import React from 'react'
import ReactDOM from 'react-dom'
import 'reset.css/reset.css'
import AppRouter from './AppRouter'
import './index.css'
import 'animate.css/animate.min.css'

function App() {
  return (
    <div className='wrapper'>
      <AppRouter />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
