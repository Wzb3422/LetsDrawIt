import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from './pages/List'
import 'reset.css/reset.css'
import './index.css'

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Switch>
          <Route exact path='/' component={List} />
        </Switch>
      </Router>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
