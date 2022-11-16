import React from 'react'
import {Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className='about'>
      <h2 className='aboutHeader'>About Nutri-Scan</h2>

      Special shoutout to Jan, Alo, and David for giving the me knowledge  and tools to do this. 



      <Link to='/'>Back to Search</Link>
      <Link to='apiinfo/'>API Information</Link>
    </div>
  )
}

export default AboutMe