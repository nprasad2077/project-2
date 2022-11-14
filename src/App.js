import React from 'react'
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
//Components
import Header from './components/Header'
import Search from './components/Search'
import userEvent from '@testing-library/user-event';
import axios from 'axios';

function App() {
  
  return (
    <div>
      <Header />
      <Search />
    </div>
  )
}

export default App