import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function NotFound() {
  return (
    <div>
      <h1>Page Not Found!</h1>
      <Link to='/'>Go to home page</Link>
    </div>
  )
}

export default NotFound
