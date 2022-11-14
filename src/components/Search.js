import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const urlImage = 'https://world.openfoodfacts.org/cgi/search.pl?search_terms=snickers&action=process&json=1&fields=image_url'
const urlInput = ''


function Search() {
  const [foodData, setFoodData] = useState('')
  const [foodSearch, setFoodSearch] = useState('');
  const [foodInput, setFoodInput]= useState('');
  const [foodImage, setFoodImage] = useState('');
  const [form, setForm] = useState('');

  useEffect(() => {
    axios.get(urlImage).then ((response) => {
      setFoodData(response.data);
      console.log('search');
    });
  }, []);

  if (!foodData) return null;

  const handleChange = (e) => {
    setFoodInput(e.target.value)
  }

  const handleSubmit = () => {
    setFoodSearch(foodInput)
  }


  // useEffect(() => {
  //   axios.get(urlImage).then ((response) => {
  //     setFoodImage(response.data);
  //     console.log('image');
  //   });
  // }, []);

  // if (!foodImage) return null;





  return (
    <div className='form'>
      <input value={form} onChange={e => setForm(e.target.value)}></input>
      <button>Search</button>
      <p className='test'>
        {form}
      </p>

      <div className='search'>
        <input type='text' onChange={handleChange}></input>
        <button onClick={handleSubmit}>Search</button>
        {' '}
        <p>{foodSearch}</p>
      </div>

    </div>
  )
}

export default Search