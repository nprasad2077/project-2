import React from 'react'

function NutriLevels({foodData, index}) {
  return (
    <div>
        {foodData && foodData[index].nutrient_levels.fat}
        {foodData && foodData[index].nutrient_levels.salt}
        {foodData && foodData[index].nutrient_levels.sugars}
        {/* {foodData && foodData[index].nutrient_levels.saturated} */}
    </div>
  )
}

export default NutriLevels