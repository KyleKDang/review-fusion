import React from 'react';
import Navbar from './components/Navbar.js'
import Home from './pages/Home';
import Review from './pages/Review';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ReviewsProvider } from './ReviewsContext.js';
import { AuthProvider } from './contexts/authContext/index.jsx';

const App = () => {
  return (
    <AuthProvider>
      <ReviewsProvider>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/review' element={ <Review />} />
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

