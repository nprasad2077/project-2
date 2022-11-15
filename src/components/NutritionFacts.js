import React from 'react'

function NutritionFacts({foodData}) {
  return (
    <div className='facts'>
        <p>Energy{'(kcal/100g): '}{foodData && foodData[0].nutriments.energy}</p>
        {/* <p>Sugars: {foodData && foodData[3].nutriments.sugars_value}</p> */}

    </div>
  )
}

export default NutritionFacts