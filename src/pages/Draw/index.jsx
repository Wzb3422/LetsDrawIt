import React, { useState, Suspense, lazy } from 'react'

function Draw() {

  const [status, setStatus] = useState(0)

  if (status === 0) {
    const Requirement = lazy(() => import('./components/Requirement'))
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Requirement setStatus={setStatus} />
      </Suspense>
    )
  }

  if (status === 1) {
    const Graffiti = lazy(() => import('./components/Graffiti'))
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Graffiti />
      </Suspense>
    )
  }
}

export default Draw
