import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Header from './Header';
import NutritionData from './NutritionData';
import {Link } from "react-router-dom";
import AboutMe from './AboutMe';
import ApiInformation from './ApiInformation'



function Search({foodData, setFoodData, getFoodData, foodSearch, setFoodSearch, foodInput, setFoodInput, urlInput, foodList, setFoodList, handleChange, handleSubmit, handleString, foodClick}) {


  return (
    <div className='form'>
      <div className='search'>
        <input type='text' onChange={handleChange}></input>
        <button onClick={handleSubmit}>Search</button>
        {' '}
        {/* <p>The Search Term is: {foodSearch}</p> */}
      </div>

      <div className='masterFood'>
        {foodData && foodData.map(food => <div className='foodComponents' onClick={foodClick}><Link className='linky' to={'item/' + food.id}><img className='image-display' src={food.image_url}></img></Link><br></br> {food.product_name} <br></br> {food.serving_size} </div>)}
      </div>
      <Link className='aboutHome' to='about/'>About Me</Link>
    </div>
  )
}

export default Search