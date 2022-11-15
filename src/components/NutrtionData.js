import React from 'react'
import Nova from './Nova'
import NutritionFacts from './NutritionFacts'

function NutrtionData({getFoodData, urlInput, foodData, foodSearch}) {


  return (
    <div className='nutritionData'>
        <h3>{foodData && foodData[0].product_name}</h3>
        <h4>{foodData && foodData[0].brands}</h4>
        <img src={foodData && foodData[0].image_url}></img>

        <NutritionFacts foodData={foodData} />

        <Nova foodData={foodData} />

    </div>
  )
}

export default NutrtionData