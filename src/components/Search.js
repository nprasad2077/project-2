import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const urlImage = 'https://world.openfoodfacts.org/cgi/search.pl?search_terms=snickers&action=process&json=1&fields=image_url'


function Search() {
  const [foodImage, setFoodImage] = useState('');
  const [form, setForm] = useState('');



  useEffect(() => {
    axios.get(urlImage).then ((response) => {
      setFoodImage(response.data);
      console.log('image');
    });
  }, []);

  if (!foodImage) return null;





  return (
    <div className='form'>
      <input value={form} onChange={e => setForm(e.target.value)}></input>
      <button>Search</button>
      <p>
        {form}
        <img src={foodImage.products[0].image_url}></img>
        <img src={foodImage.products[1].image_url}></img>
        <img src={foodImage.products[2].image_url}></img>
        <img src={foodImage.products[3].image_url}></img>
        <img src={foodImage.products[5].image_url}></img>
      </p>

    </div>
  )
}

export default Search