import React from 'react'
import {Link, Navigate } from "react-router-dom";

function Images({foodData, image, navigate}) {

  return (
    <div className='images'>

      <img className='imageInfo' src={foodData && foodData[image].image_url}></img>
      <img className='imageInfo' src={foodData && foodData[image].image_ingredients_url}></img>
      <img className='imageInfo' src={foodData && foodData[image].image_nutrition_url}></img>
      <img className='imageInfo' src={foodData && foodData[image].image_packaging_url}></img>
      <form>
        <input className='back-button' type='button' value='Back to Nutrition Data' onClick={() => navigate(-1)}></input>
        <input className='back-button' type='button' value='Back to Search Results' onClick={() => navigate('/', {replace: true})}></input>
      </form>
    </div>
  )
}

export default Images