import React, { useState } from 'react';
import Navbar from './components/Navbar.js'
import Home from './pages/Home';
import Review from './pages/Review';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  const [reviews, setReviews] = useState([]);
    
  const handleReviewSubmit = (movieId, reviewText) => {
      setReviews([
        ...reviews,
        {
          movieId,
          reviewText,
        },
      ]);
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={ <Home handleReviewSubmit={handleReviewSubmit}/>} />
          <Route path='/review' element={ <Review reviews={reviews}/>} />
          <Route path='/about' element={ <About />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

