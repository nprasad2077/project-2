import React from 'react'

function EcoScore({foodData, index, ecoCapital}) {
  return (
    <div>
        <div className='eco-score'>
            <h3>EcoScore</h3>
            <p>EcoScore Grade: {foodData && ecoCapital}</p>
            <p>EcoScore Score: {foodData && foodData[index].ecoscore_score} </p>
        </div>
    </div>
  )
}

export default EcoScore