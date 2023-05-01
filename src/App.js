import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <Router >
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
