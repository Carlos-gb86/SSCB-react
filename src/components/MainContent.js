import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './MainContent.css';
import Home from '../pages/HomePage';
import HowItWorks from '../pages/HowPage';
import Predictions from '../pages/PredictionsPage';

function MainContent() {
  return (
    <main className="main-content">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/predictions" element={<Predictions />} />
      </Routes>
    </main>
  );
}

export default MainContent;
