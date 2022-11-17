import React from 'react'
import {Link } from "react-router-dom";

function ApiInformation() {
  return (
    <div className='api-info'>API Information


        <Link className='aboutLink' to='/about/'>About Me</Link>
        <Link className='aboutLink' to='/'>Back to Search</Link>
    </div>
  )
}

export default ApiInformation