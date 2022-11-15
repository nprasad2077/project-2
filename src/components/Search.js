import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';



function Search() {
  const [foodData, setFoodData] = useState('')
  const [foodSearch, setFoodSearch] = useState('');
  const [foodInput, setFoodInput]= useState('');
  const urlInput = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${foodSearch}&action=process&json=1`
  const [foodList, setFoodList] = useState([]);
  // const foodDisplay = []
  const [foodDisplay, setFoodDisplay] = useState('');



  const getFoodData = () => {
    foodSearch && 
    axios.get (urlInput)
    .then(res => setFoodData(res.data.products))
    .catch(err => alert('error'))
    console.log(foodData);
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

  // if (foodData) {
  //   foodData.forEach((element, index, array) => {
  //   foodDisplay.push(element.product_name);
  //   console.log(foodDisplay);
  //   });
  // }

  const foodClick = (e) => {
    setFoodDisplay(e.target);
    console.log(foodDisplay.outerHTML.slice(10));
    handleString(foodDisplay.outerHTML)

  }

  const handleString = (str) => {
      let string = str.slice(10)
      let stringTwo = string.slice(0, -2);
      console.log(stringTwo);
      console.log(foodData.indexOf('100g'));
  }


  return (
    <div className='form'>
      <div className='search'>
        <input type='text' onChange={handleChange}></input>
        <button onClick={handleSubmit}>Search</button>
        {' '}
        <p>The Search Term is: {foodSearch}</p>
      </div>

      <div className='foodComponents'>
        {foodData && foodData.map(food => <ul className='foodComponents' onClick={foodClick}><img src={food.image_url}></img> <br></br> {food.product_name} <br></br> {food.serving_size} </ul>)}
      </div>

    
    </div>
  )
}

export default Search