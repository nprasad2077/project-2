import React from 'react'
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import axios from 'axios';
//Components
import Header from './components/Header'
import Search from './components/Search'
import NutritionData from './components/NutritionData';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import ApiInformation from './components/ApiInformation'


function App() {

  const [foodData, setFoodData] = useState('')
  const [foodSearch, setFoodSearch] = useState('');
  const [foodInput, setFoodInput]= useState('');
  const urlInput = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${foodSearch}&action=process&json=1`
  const [foodList, setFoodList] = useState([]);
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
    e.preventDefault();
    setFoodInput(e.target.value)
  }

  const handleSubmit = () => {
    setFoodSearch(foodInput)
    getFoodData()
  }

  const foodClick = (e) => {
    setFoodDisplay(e.target);
    // console.log(foodDisplay.outerHTML.slice(10));
    handleString(foodDisplay.outerHTML)

  }
  const handleString = (str) => {
    let string = str.slice(10)
    let stringTwo = string.slice(0, -2);
    console.log(stringTwo);
    console.log(foodData.findIndex(function(data, index) {
      if (data.image_url === stringTwo) {
        return true;
      }
    }));
    setFoodList(foodData.findIndex(function(data, index) {
      if (data.image_url === stringTwo) {
        return true;
      }
    }))
}
  
  return (
    <div>
      <Header />
      {/* <Footer /> */}
      <main>
        <Routes>
          <Route path='/' element={ <Search foodData={foodData} setFoodData={setFoodData} foodSearch={foodSearch} setFoodSearch={setFoodSearch} foodInput={foodInput} setFoodInput={setFoodInput} urlInput={urlInput} foodList={foodList}  setFoodList={setFoodList} foodDisplay={foodDisplay} setFoodDisplay={setFoodDisplay} getFoodData={getFoodData} handleChange={handleChange} handleSubmit={handleSubmit} foodClick={foodClick} handleString={handleString}/>} />
          <Route path='item/:id/' element={<NutritionData getFoodData={getFoodData} urlInput={urlInput} foodData={foodData} foodSearch={foodSearch} foodList={foodList} />} />
          <Route path='about/' element ={<AboutMe />} />
          <Route path='about/apiinfo/' element={<ApiInformation />} />
        </Routes>
      </main>
    </div>
  )
}

export default App