import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Footer from './Footer';


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='checkout' element={
            <Checkout />
          }
          />
          <Route path="/" element={
            <div>
              <Home />
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
