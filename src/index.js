import React from 'react'
import ReactDOM from 'react-dom'
import 'reset.css/reset.css'
import AppRouter from './AppRouter'

function App() {
  return (
    <AppRouter />
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
