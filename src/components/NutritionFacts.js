import React from 'react'

function NutritionFacts({foodData}) {
  return (
    <div className='facts'>
        <p>Energy{'(kcal/100g): '}{foodData && foodData[0].nutriments.energy}</p>

        <h5>Ingredients</h5>
        <p>{foodData && foodData[0].ingredients_text}</p>

    </div>
  )
}

export default NutritionFacts