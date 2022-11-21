import React from 'react'
import {Link } from "react-router-dom";



function Search({foodData, handleChange, handleSubmit, foodClick, reload}) {


  return (
    <div className='form'>
      <div className='search'>
        <input type='text' placeholder='Search for a food product...' onChange={handleChange}></input>
        <button onClick={handleSubmit}>Search</button>
        {' '}
      </div>

      <div className='masterFood'>
        {foodData && foodData.map(food => <div className='foodComponents' onClick={foodClick}><Link className='linky' to={'item/' + food.id}><img className='image-display' src={food.image_url}></img></Link><br></br> <span className='food-text'>{food.product_name}</span> <br></br> <span className='food-text'>{food.serving_size}</span> </div>)}
      </div>
      <Link className='aboutHome' to='about/'>About Me</Link>
      <button onClick={reload}>Start New Search</button>
    </div>
  )
}

export default Search