import React, { useState } from 'react';
import MovieList from './components/MovieList';
import './App.css';

const App = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      genre: "Sci-Fi",
      rating: 8.8,
      description: "A mind-bending thriller about dreams within dreams.",
      poster: '/images/inception.jpg',
    },
    {
      id: 2,
      title: "The Dark Knight",
      genre: "Action",
      rating: 9.0,
      description: "Batman fights crime in Gotham while dealing with the Joker.",
      poster: "/images/the-dark-knight.jpg",
    },
    {
      id: 3,
      title: "The Matrix",
      genre: "Sci-Fi",
      rating: 8.7,
      description: "A computer hacker learns the shocking truth about his reality.",
      poster: "/images/matrix.jpg",
    },
  ];

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
    <div className="App">
      <h1>Movie Review App</h1>
      <MovieList movies={movies} onReviewSubmit={handleReviewSubmit} />
    </div>
  );
};

export default App;

