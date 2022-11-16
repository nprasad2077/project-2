import React from 'react'
import {Link } from "react-router-dom";

function Header() {
  return (
    <div>
        <h1 className='header'>Nutri-Scan</h1>

        <nav className='nav'>
          {/* <Link to='/'><p>Back to Search</p></Link> */}
        </nav>
    </div>
  )
}

export default Header