import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Header from './Header';
import NutritionData from './NutritionData';
import {Link } from "react-router-dom";



function Search({foodData, setFoodData, getFoodData, foodSearch, setFoodSearch, foodInput, setFoodInput, urlInput, foodList, setFoodList, handleChange, handleSubmit, handleString, foodClick}) {


  return (
    <div className='form'>
      {/* <Header /> */}
      <div className='search'>
        <input type='text' onChange={handleChange}></input>
        <button onClick={handleSubmit}>Search</button>
        {' '}
        <p>The Search Term is: {foodSearch}</p>
      </div>

      <div className='foodComponents'>
        {foodData && foodData.map(food => <ul className='foodComponents' onClick={foodClick}><Link to={'item/' + food.id}><img src={food.image_url}></img></Link><br></br> {food.product_name} <br></br> {food.serving_size} </ul>)}
      </div>
      {/* <NutritionData getFoodData={getFoodData} urlInput={urlInput} foodData={foodData} foodSearch={foodSearch} foodList={foodList} /> */}
    </div>
  )
}

export default Search