import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';



function Search() {
  const [foodData, setFoodData] = useState('')
  const [foodSearch, setFoodSearch] = useState('');
  const [foodInput, setFoodInput]= useState('');
  const urlInput = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${foodSearch}&action=process&json=1`
  const [foodList, setFoodList] = useState([]);
  const foodDisplay = []



  const getFoodData = () => {
    foodSearch && 
    axios.get (urlInput)
    .then(res => setFoodData(res.data.products))
    .catch(err => alert('error'))
  }

  useEffect(() => {
    getFoodData()
  },[foodSearch])

  

  const handleChange = (e) => {
    setFoodInput(e.target.value)
  }

  const handleSubmit = () => {
    setFoodSearch(foodInput)
    getFoodData()
  }

  if (foodData) {
    foodData.forEach((element, index, array) => {
    foodDisplay.push(element.product_name);
    console.log(foodDisplay);
    });
  }


  return (
    <div className='form'>
      <div className='search'>
        <input type='text' onChange={handleChange}></input>
        <button onClick={handleSubmit}>Search</button>
        {' '}
        <p>The Search Term is: {foodSearch}</p>
      </div>
      {/* {foodData && <img src={foodData[0].image_url}></img>}
      {foodData && foodData[0].product_name}
      <br></br>
      {foodData && <img src={foodData[1].image_url}></img>}
      {foodData && foodData[1].product_name} */}

      <div>
        {/* {foodData && <ul>{foodDisplay.map(food => <li>{food}</li>)}</ul>} */}
      </div>

      <div>
        { foodData && foodData.map(food => <ul> <img src={food.image_url}></img> <br></br> {food.product_name} <br></br> {food.serving_size} </ul>)}
      </div>

    
    </div>
  )
}

export default Search