import React, { useState, Suspense, lazy } from 'react'

function Draw() {

  const [status, setStatus] = useState(0)

  if (status === 0) {
    const Requirement = lazy(() => import('./components/Requirement'))
    return <Requirement />
  }
}

export default Draw
