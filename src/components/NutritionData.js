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





  return (
    <div className='nutritionData'>

      <div class=' mb-10 border border-2 border-sky-500'>
        <div>
          <p class='text-3xl text-center'>{foodData[index].product_name}</p>
        </div>

      </div>


    

      <div className='components'>
          <div className='grid-components nutri-back'>
            <EcoScore foodData={foodData} index={index} ecoCapital={ecoCapital}/>
          </div>
          <div className='grid-components nutri-back'>
            <NutritionFacts foodData={foodData} index={index} />
          </div>
          <div className='grid-components nutri-back'>
            <NutriScore foodData={foodData} index={index}/>
          </div>
          <div className='grid-components nutri-back'>
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