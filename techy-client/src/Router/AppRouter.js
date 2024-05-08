import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../Components/HomePage.js';
import PortfolioPage from '../Components/PortfolioPage.js';
import ContactPage from '../Components/ContactPage.js';


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path='/portfolio' Component={PortfolioPage}/>
            <Route path='/contact' Component={ContactPage}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
