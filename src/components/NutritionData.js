import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nova from './Nova'
import Vegan from './Vegan'
import NutriScore from './NutriScore'
import NutritionFacts from './NutritionFacts'
import EcoScore from './EcoScore'
import NutriLevels from './NutriLevels'
import {Link } from "react-router-dom";

function NutritionData({foodData, setImage, getFoodData}) {
  const {id} = useParams();

  const index = foodData && foodData.findIndex(function(data){
    if (data.id === id) {
      return true;
    }
  });

  const allergensArr = foodData && foodData[index].allergens.split(',');
  const allergensUpdate = foodData && allergensArr.map((allergen) => allergen.slice(3) + " ")


  useEffect(() => {setImage(index)}, [index])



  const ecoCapital = (foodData && foodData[index].ecoscore_grade).toUpperCase();

  console.log(foodData[index]);
  console.log(foodData[index].product_name); //Title
  console.log(foodData[index].quantity) //quantity
  console.log(foodData[index].packaging); //packaging
  console.log(foodData[index].brands);  //brands
  console.log(foodData[index].categories_hierarchy); //categories
  console.log(foodData[index].labels); //labels
  console.log(foodData[index].manufacturing_places); //manufacturing places
  console.log(foodData[index].countries); //countries 
  console.log(foodData[index].image_url) //image
  console.log(foodData[index].ingredients_text_en) //ingredients english
  console.log(foodData[index].ingredients_text) //ingredients
  





  return (
    <div className='flex flex-col items-center justify-center'>

      <div class='mt-10 mb-2 border border-2 border-red-500 flex flex-col items-center justify-center bg-white text-[#22333b] w-3/4'>
        <div>
          <p class='text-3xl text-center mt-2'>{foodData[index].product_name}</p>
          <p class='text-center'>Quantity: {foodData[index].quantity}</p>
        </div>
        <div class='w-max mt-2'>
          <img class='w-full' src={foodData[index].image_url}></img>
        </div>
        <div class='p-4'>
          <p>Barcode: {foodData[index].code}</p>
          <p>Packaging: {foodData[index].packaging}</p>
          <p>Brands: {foodData[index].brands}</p>
          <p>Manufacturing or processing places: {foodData[index].manufacturing_places}</p>
          <p>Countries where sold: {foodData[index].countries}</p>
          <p class='mt-4'>Ingredients: {foodData[index].ingredients_text_en}</p>
        </div>
      </div>

      <div class='table justify-center items-center border border-2 border-red-500 w-3/4 h-full'>
          <div class='bg-white text-[#22333b] table-cell w-1/3 border-r-4 border-[#656d4a]'>
            <NutritionFacts foodData={foodData} index={index} />
          </div>
          <div class='bg-white text-[#22333b] table-cell w-1/3 border-r-4 border-[#656d4a]'>
            <NutriScore foodData={foodData} index={index}/>
          </div>
          <div class='bg-white text-[#22333b] table-cell w-1/3'>
            <NutriLevels foodData={foodData} index={index}/>
          </div>
      </div>
  
      <div className='nutrition-links'>
        <Link to='/'><p>Back to Search</p></Link>
        <Link to='images/'><p>Images</p></Link>
      </div>
    </div>
  )
}

export default NutritionData