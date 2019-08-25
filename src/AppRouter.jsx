import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Login = lazy(() => import('./pages/Login'))
const NoMatch = lazy(() => import('./pages/NoMatch'))

function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route component={NoMatch}/>
        </Switch>
      </Suspense>
    </Router>
    )

}

export default AppRouter
