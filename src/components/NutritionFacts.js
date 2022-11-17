import React from 'react'

function NutritionFacts({foodData, index}) {
  return (
    <div className='facts'>
       <div className='nutriFacts'>
        <h3>Nutrition Facts{'(100g)'}</h3>
        <p>Energy: {foodData && foodData[index].nutriments.energy_100g}</p>
        <p>Sugars: {foodData && foodData[index].nutriments.sugars_100g}</p>
        <p>Proteins: {foodData && foodData[index].nutriments.proteins_100g}</p>
        <p>Sodium: {foodData && foodData[index].nutriments.sodium_100g}</p>
        <p>Fat: {foodData && foodData[index].nutriments.fat_100g}</p>
        <p>Carbohydrates: {foodData && foodData[index].nutriments.carbohydrates_100g}</p>
      </div>
    </div>
  )
}

export default NutritionFacts