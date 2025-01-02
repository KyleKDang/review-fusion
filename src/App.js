import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.js'
import Home from './pages/Home.js';
import Review from './pages/Review.js';
import About from './pages/About.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ReviewsProvider } from './contexts/ReviewsContext.js';
import { AuthProvider } from './contexts/authContext/index.jsx';

const App = () => {
  const [movies, setMovies] = useState([]);
    
  useEffect(() => {
      const fetchMovies = async () => {
          try {
              const response = await fetch('http://localhost:3000')
              const data = await response.json()
              setMovies(data)
              console.log(data)
          } catch (err) {
              console.log(err)
          }
      }

      fetchMovies()
  }, [])

  return (
    <AuthProvider>
      <ReviewsProvider>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path='/' element={ <Home movies={movies}/>} />
            <Route path='/review' element={ <Review movies={movies}/>} />
            <Route path='/about' element={ <About />} />
            <Route path='/login' element={ <Login />} />
            <Route path='signup' element={ <Signup />}/>
          </Routes>
        </div>
      </ReviewsProvider>
    </AuthProvider>
  );
};

export default App;

