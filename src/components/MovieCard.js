import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import './MovieCard.css';

const MovieCard = ({ movie, onReviewSubmit }) => {
  const [reviewText, setReviewText] = useState('');

  const handleInputChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleSubmitReview = () => {
    onReviewSubmit(movie.id, reviewText);
    setReviewText('');
  };

  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.genre}</p>
        <p>Rating: {movie.rating}</p>
        <p>{movie.description}</p>
        <ReviewForm
          reviewText={reviewText}
          onInputChange={handleInputChange}
          onSubmitReview={handleSubmitReview}
        />
      </div>
    </div>
  );
};

export default MovieCard;
