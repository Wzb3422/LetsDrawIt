import React from 'react'
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <h3>
      Your path matches no component.Go back<Link to='/'> home</Link>
    </h3>
  )
}

export default NoMatch
