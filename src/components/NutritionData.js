import React from 'react'
import { useParams } from 'react-router-dom'
import Nova from './Nova'
import NutritionFacts from './NutritionFacts'
import {Link } from "react-router-dom";

function NutritionData({foodData}) {
  const {id} = useParams();
  const index = foodData.findIndex(function(data, index){
    if (data.id === id) {
      return true;
    }
  });


  return (
    <div className='nutritionData'>
      <h1>{foodData && foodData[index].product_name}</h1>

      <div>
        Brands: {foodData && foodData[index].brands}
      </div>

      <br></br>

      <img className='imageInfo' src={foodData && foodData[index].image_url}></img>

      <p>The id is: {id}</p>

      <span className='index'>The Index is: {index}</span>

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
        <p>EcoScore Grade: {foodData && foodData[index].ecoscore_grade}</p>
        <p>EcoScore Score: {foodData && foodData[index].ecoscore_score} </p>

      </div>

      <div>
        <h3>Nutrition Facts{'(100g)'}</h3>
        <p>Energy: {foodData && foodData[index].nutriments.energy_100g}</p>
        <p>Sugars: {foodData && foodData[index].nutriments.sugars_100g}</p>
        <p>Proteins {foodData && foodData[index].nutriments.proteins_100g}</p>
        <p>Sodium: {foodData && foodData[index].nutriments.sodium_100g}</p>
        <p>Fat: {foodData && foodData[index].nutriments.fat_100g}</p>
        <p>Carbohydrates: {foodData && foodData[index].nutriments.carbohydrates_100g}</p>

      </div>
      <Link to='/'><p>Back to Search</p></Link>
    </div>
  )
}

export default NutritionData