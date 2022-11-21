import React from 'react'
import { useParams } from 'react-router-dom'
import Nova from './Nova'
import Vegan from './Vegan'
import NutriScore from './NutriScore'
import NutritionFacts from './NutritionFacts'
import EcoScore from './EcoScore'
import NutriLevels from './NutriLevels'
import {Link } from "react-router-dom";

function NutritionData({foodData, setImage}) {
  const {id} = useParams();

  const index = foodData.findIndex(function(data){
    if (data.id === id) {
      return true;
    }
  });

  setImage(index);



  const ecoCapital = (foodData && foodData[index].ecoscore_grade).toUpperCase();


  return (
    <div className='nutritionData'>

      <div className='first-component'>


        <h1 className='productName'>{foodData && foodData[index].product_name}</h1>

        <div className='brands'>
          Brands: {foodData && foodData[index].brands}
        </div>
        <br></br>
        <div>
          Origin Countries: {foodData && foodData[index].countries}
        </div>

        <br></br>

        <img className='imageInfo' src={foodData && foodData[index].image_url}></img>

        <div className='ingredients'>
          Ingredients: {foodData && foodData[index].ingredients_text}
        </div>

        <div className='allergens'>
          Allergens: {foodData && + foodData[index].allergens_imported}
        </div>

      <div className='numberAdd'>
        Number of food addivites: {foodData && foodData[index].additives_n}
      </div>

      <div className='additives'>
        Additives: {foodData && foodData[index].additives_tags}
      </div>
    
    </div>

      <div className='components'>
          <div className='grid-components'>
            <EcoScore foodData={foodData} index={index} ecoCapital={ecoCapital}/>
          </div>
          <div className='grid-components'>
            <NutritionFacts foodData={foodData} index={index} />
          </div>
          <div className='grid-components'>
            <NutriScore foodData={foodData} index={index}/>
          </div>
          <div className='grid-components'>
            <NutriLevels foodData={foodData} index={index}/>
          </div>
      </div>

        {/* <Nova className='nova' foodData={foodData} index={index}/> */}
        {/* <Vegan foodData={foodData} index={index}/> */}
  
      <div className='nutrition-links'>
        <Link to='/'><p>Back to Search</p></Link>
        <Link to='images/'><p>Images</p></Link>
      </div>
    </div>
  )
}

export default NutritionData