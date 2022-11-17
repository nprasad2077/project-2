import React from 'react'

function NutriLevels({foodData, index}) {
  return (
    <div className='nutri-levels'>
      <h3>Nutrient Levels</h3>

      <div className='fat-levels'>
        <span className='bold'>Fat:</span> {foodData && foodData[index].nutrient_levels.fat}
      </div>

      <div className='salt-levels'>
        <span className='bold'>Salt:</span> {foodData && foodData[index].nutrient_levels.salt}
      </div>

      <div className='sugar-levels'>
        <span className='bold'>Sugars:</span> {foodData && foodData[index].nutrient_levels.sugars}
      </div>
      <div>
        <span className='bold'>Saturated Fats:</span> {foodData && foodData[index].nutrient_levels['saturated-fat']}
      </div>
    </div>
  )
}

export default NutriLevels