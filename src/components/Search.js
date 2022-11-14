import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';



function Search() {
  const [foodData, setFoodData] = useState('')
  const [foodSearch, setFoodSearch] = useState('');
  const [foodInput, setFoodInput]= useState('');
  const urlInput = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${foodSearch}&action=process&json=1`



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
    console.log(foodData[0].product_name);
  }





  return (
    <div className='form'>
      <div className='search'>
        <input type='text' onChange={handleChange}></input>
        <button onClick={handleSubmit}>Search</button>
        {' '}
        <p>The Search Term is: {foodSearch}</p>
      </div>
      {foodData && <img src={foodData[0].image_url}></img>}
      <br></br>
      {foodData && foodData[0].product_name}
    </div>
  )
}

export default Search