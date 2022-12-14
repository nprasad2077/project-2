import React from 'react'

function NutriScore({foodData, index}) {

  const capitalGrade = (foodData && foodData[index].nutriscore_grade).toUpperCase()






  return (
    <div className='nutriScore'>
        <h3>Nutriscore Data</h3>
        <p>NutriScore Grade: {foodData && capitalGrade}</p>
        <p>Energy: {foodData && foodData[index].nutriscore_data.energy}</p>
        <p>Energy Points: {foodData && foodData[index].nutriscore_data.energy_points}</p>
        <p>Protein Points: {foodData && foodData[index].nutriscore_data.proteins_points}</p>
        <p>Sugar Points: {foodData && foodData[index].nutriscore_data.sugars_points}</p>
        <p>Sodium Points: {foodData && foodData[index].nutriscore_data.sodium_points}</p>
    </div>
  )
}

export default NutriScore