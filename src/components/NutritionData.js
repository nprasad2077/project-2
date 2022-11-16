import React from 'react'
import { useParams } from 'react-router-dom'
import Nova from './Nova'
import Vegan from './Vegan'
import NutriScore from './NutriScore'
import Images from './Images'

import NutritionFacts from './NutritionFacts'
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
      <h1>{foodData && foodData[index].product_name}</h1>

      <div>
        Brands: {foodData && foodData[index].brands}
      </div>
      <br></br>
      <div>
        Origin Countries: {foodData && foodData[index].countries}
      </div>

      <br></br>

      <img className='imageInfo' src={foodData && foodData[index].image_url}></img>

      <div>
        Ingredients: {foodData && foodData[index].ingredients_text}
      </div>

      <div className='allergens'>
        Allergens: {foodData && foodData[index].allergens_imported}
      </div>

      <div className='numberAdd'>
        Number of food addivites: {foodData && foodData[index].additives_n}
      </div>

      <div>
        Additives: {foodData && foodData[index].additives_tags}
      </div>


      <div>
        <h3>EcoScore</h3>
        <p>EcoScore Grade: {foodData && ecoCapital}</p>
        <p>EcoScore Score: {foodData && foodData[index].ecoscore_score} </p>

      </div>

      <div>
        <h3>Nutrition Facts{'(100g)'}</h3>
        <p>Energy: {foodData && foodData[index].nutriments.energy_100g}</p>
        <p>Sugars: {foodData && foodData[index].nutriments.sugars_100g}</p>
        <p>Proteins: {foodData && foodData[index].nutriments.proteins_100g}</p>
        <p>Sodium: {foodData && foodData[index].nutriments.sodium_100g}</p>
        <p>Fat: {foodData && foodData[index].nutriments.fat_100g}</p>
        <p>Carbohydrates: {foodData && foodData[index].nutriments.carbohydrates_100g}</p>

        <Nova foodData={foodData} index={index}/>
        <Vegan foodData={foodData} index={index}/>
        <NutriScore foodData={foodData} index={index}/>
      
        <Link to='images/'><p>Images</p></Link>

      </div>
      <Link to='/'><p>Back to Search</p></Link>
    </div>
  )
}

export default NutritionData