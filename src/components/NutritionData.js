import React from 'react'
import { useParams } from 'react-router-dom'
import Nova from './Nova'
import Vegan from './Vegan'
import NutriScore from './NutriScore'
import Images from './Images'
import NutritionFacts from './NutritionFacts'
import EcoScore from './EcoScore'
import NutriLevels from './NutriLevels'

import {Link } from "react-router-dom";

function NutritionData({foodData, setImage, image}) {
  const {id} = useParams();

  const index = foodData.findIndex(function(data, index){
    if (data.id === id) {
      return true;
    }
  });

  setImage(index)
  console.log(image);



  const ecoCapital = (foodData && foodData[index].ecoscore_grade).toUpperCase();


  return (
    <div className='nutritionData'>
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
        Allergens: {foodData && foodData[index].allergens_imported}
      </div>

      <div className='numberAdd'>
        Number of food addivites: {foodData && foodData[index].additives_n}
      </div>

      <div className='additives'>
        Additives: {foodData && foodData[index].additives_tags}
      </div>

      <div className='components'>
        <EcoScore foodData={foodData} index={index} ecoCapital={ecoCapital}/>
        <NutritionFacts foodData={foodData} index={index} />
        <NutriScore className='nutriScore' foodData={foodData} index={index}/>
        <NutriLevels foodData={foodData} index={index}/>
      </div>

        {/* <Nova className='nova' foodData={foodData} index={index}/> */}
        {/* <Vegan foodData={foodData} index={index}/> */}
  
      
      <Link to='images/'><p>Images</p></Link>
      <Link to='/'><p>Back to Search</p></Link>
    </div>
  )
}

export default NutritionData