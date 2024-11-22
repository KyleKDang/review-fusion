import React from 'react';
import Navbar from './components/Navbar.js'
import Home from './pages/Home';
import Review from './pages/Review';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/review-fusion' element={ <Home />} />
          <Route path='/review' element={ <Review />} />
          <Route path='/about' element={ <About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

