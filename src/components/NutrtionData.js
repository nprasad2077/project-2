import React from 'react'
import Nova from './Nova'
import NutritionFacts from './NutritionFacts'

function NutrtionData({getFoodData, urlInput, foodData, foodSearch, foodList}) {

  let index = 0;


  return (
    <div className='nutritionData'>
        {/* <h3>{foodData && foodData[0].product_name}</h3> */}
        <h3>{foodData && foodData[index].product_name}</h3>
        <h4>{foodData && foodData[index].brands}</h4>
        <img src={foodData && foodData[index].image_url}></img>
        <p>The Index is {foodList}</p>

        <NutritionFacts foodData={foodData} />

        <Nova foodData={foodData} />

    </div>
  )
}

export default NutrtionData