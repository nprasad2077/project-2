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
import NutrtionData from './components/NutrtionData';
function App() {
  
  return (
    <div>
      {/* <Header /> */}
      {/* <Search /> */}
      {/* <NutrtionData /> */}
      <main>
        <Routes>
          <Route path='/' element={ <Search />} />

        </Routes>
      </main>
    </div>
  )
}

export default App