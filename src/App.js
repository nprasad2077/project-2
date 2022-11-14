import React from 'react'
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
//Components
import Header from './components/Header'
import Search from './components/Search'
import userEvent from '@testing-library/user-event';
import axios from 'axios';

const url = 'api'
const urlTest = 'https://world.openfoodfacts.org/cgi/search.pl?search_terms=snickers&action=process&json=1&fields=product_name'
const urlInput = ''

function App() {
  const [food, setFood] = useState('');
  const [foodSearch, setFoodSearch] = useState('');

  useEffect(() => {
    axios.get(urlTest).then ((response) => {
      setFood(response.data);
      console.log('axios');
    });
  }, []);

  if(!food) return null;

  // const foodData = () => {}



  return (
    <div>
      <Header />
      <Search />
      {/* <div className='testList'>
        <p>{food.products[0].product_name}</p>
        <p>{food.products[1].product_name}</p>
        <p>{food.products[2].product_name}</p>
        <p>{food.products[3].product_name}</p>
        <p>{food.products[4].product_name}</p>
        <p>{food.products[5].product_name}</p>
        <p>{food.products[6].product_name}</p>
        <p>{food.products[7].product_name}</p>
        <p>{food.products[8].product_name}</p>
        <p>{food.products[9].product_name}</p>
        <p>{food.products[10].product_name}</p>
        <p>{food.products[11].product_name}</p>
        <p>{food.products[12].product_name}</p>
        <p>{food.products[13].product_name}</p>
        <p>{food.products[14].product_name}</p>
        <p>{food.products[16].product_name}</p>
        <p>{food.products[17].product_name}</p>
        <p>{food.products[18].product_name}</p>
        <p>{food.products[19].product_name}</p>
        <p>{food.products[20].product_name}</p>
        <p>{food.products[21].product_name}</p>
        <p>{food.products[22].product_name}</p>
        <p>{food.products[23].product_name}</p>
        </div> */}
    </div>
  )
}

export default App