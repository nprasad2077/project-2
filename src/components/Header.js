import React from 'react'
import {Link } from "react-router-dom";
import logo from '../assets/food.png'

// console.log(logo);

function Header() {
  return (
    <div className='header-box'>
      <img src={logo}></img>
      <h1 className='header'>Nutri-Scan</h1>
    </div>
  )
}

export default Header