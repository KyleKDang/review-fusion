import React from 'react';
import Navbar from './components/Navbar.js'
import Home from './components/pages/Home';
import Review from './components/pages/Review';
import About from './components/pages/About';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/review' element={ <Review />} />
          <Route path='/about' element={ <About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

