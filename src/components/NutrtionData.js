import React from 'react'
import Nova from './Nova'

function NutrtionData({getFoodData, urlInput, foodData, foodSearch}) {


  return (
    <div className='nutritionData'>
        <h3>{foodData && foodData[0].product_name}</h3>
        <h4>{foodData && foodData[0].brands}</h4>
        <img src={foodData && foodData[0].image_url}></img>

        <Nova foodData={foodData} />

    </div>
  )
}

export default NutrtionData