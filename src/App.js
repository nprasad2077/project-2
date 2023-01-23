import React from 'react'
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link, useNavigate} from "react-router-dom";
// import userEvent from '@testing-library/user-event';
import axios from 'axios';
//Components
import Header from './components/Header'
import Search from './components/Search'
import NutritionData from './components/NutritionData';
import AboutMe from './components/AboutMe';
import ApiInformation from './components/ApiInformation'
import Images from './components/Images'


function App() {

  const [foodData, setFoodData] = useState('')
  const [foodSearch, setFoodSearch] = useState('');
  const [foodInput, setFoodInput]= useState('');
  const urlInput = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${foodInput}&action=process&json=1`
  const [foodList, setFoodList] = useState([]);
  const [foodDisplay, setFoodDisplay] = useState('');
  const [image, setImage] = useState('')
  const navigate = useNavigate();

  function reload() {
    window.location.reload(false);
  }


  const getFoodData = async () => {
    const response = await axios.get (urlInput)
    .then(res => setFoodData(res.data.products))
    .catch(err => alert('error'))
  }


  const handleChange = (e) => {
    e.preventDefault();
    setFoodInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('works');
    getFoodData()
    // setFoodInput('');
  }

  const foodClick = (e) => {
    setFoodDisplay(e.target);

  }
  
  return (
    <div className='app'>
      <Header />
      
      <main>
        <Routes>
          <Route path='/' element={ <Search foodData={foodData} setFoodData={setFoodData} foodSearch={foodSearch} setFoodSearch={setFoodSearch} foodInput={foodInput} setFoodInput={setFoodInput} urlInput={urlInput} foodList={foodList}  setFoodList={setFoodList} foodDisplay={foodDisplay} setFoodDisplay={setFoodDisplay} getFoodData={getFoodData} handleChange={handleChange} handleSubmit={handleSubmit} foodClick={foodClick} reload={reload}/>} />
          <Route path='item/:id/' element={<NutritionData getFoodData={getFoodData} urlInput={urlInput} foodData={foodData} foodSearch={foodSearch} foodList={foodList} image={image} setImage={setImage} />} />
          <Route path='about/' element ={<AboutMe />} />
          <Route path='about/apiinfo/' element={<ApiInformation />} />
          <Route path='item/:id/images/' element={<Images foodData={foodData} image={image} navigate={navigate} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App