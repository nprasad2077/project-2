import React from 'react'
import {Link } from "react-router-dom";

function Images({foodData, image}) {

  return (
    <div className='images'>

      {/* The Index is {image} */}

      <img className='imageInfo' src={foodData && foodData[image].image_url}></img>
      <img className='imageInfo' src={foodData && foodData[image].image_ingredients_url}></img>
      <img className='imageInfo' src={foodData && foodData[image].image_nutrition_url}></img>
      <img className='imageInfo' src={foodData && foodData[image].image_packaging_url}></img>


    </div>
  )
}

export default Images