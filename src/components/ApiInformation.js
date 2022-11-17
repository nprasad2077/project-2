import React from 'react'
import {Link } from "react-router-dom";

function ApiInformation() {
  return (
    <div className='api-info'>API Information
      <p>The Open Food Facts database is available under the Open Database License.</p>
      <p>The individual contents of the database are available under the Database Contents License.</p>
      <Link className='aboutLink' to='/about/'>About Me</Link>
      <Link className='aboutLink' to='/'>Back to Search</Link>
    </div>
  )
}

export default ApiInformation