import React from 'react'
import {Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className='about'>
      <h2 className='aboutHeader'>About Nutri-Scan</h2>
      Special shoutout to Jan, Alo, and David for being awesome instructors! <br/>Also to Hamza Ali for styling.
      <Link className='aboutLink' to='apiinfo/'>API Information</Link>
      <Link className='aboutLink' to='/'>Back to Search</Link>
    </div>
  )
}

export default AboutMe