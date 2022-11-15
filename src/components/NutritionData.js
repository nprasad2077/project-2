import React from 'react'
import { useParams } from 'react-router-dom'
import Nova from './Nova'
import NutritionFacts from './NutritionFacts'

function NutritionData({foodData}) {
  const {id} = useParams();
  const index = foodData.findIndex(function(data, index){
    if (data.id === id) {
      return true;
    }
  });


  return (
    <div className='nutritionData'>
      The product is: {foodData && foodData[index].product_name}

      <br></br>

      The Index is: {index}

      <img src={foodData && foodData[index].image_url}></img>

      <p>The id is: {id}</p>

    </div>
  )
}

export default NutritionData