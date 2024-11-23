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
      <img src={`/review-fusion${movie.poster}`} alt={movie.title} className="movie-poster" />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.genre}</p>
        <p>{movie.releaseDate}</p>
        <p>IMDb Rating: {movie.rating}</p>
      </div>
      <div className="review-form-container">
        <ReviewForm className='review-form'
          reviewText={reviewText}
          onInputChange={handleInputChange}
          onSubmitReview={handleSubmitReview}
        />
      </div>
    </div>
  );
};

export default MovieCard;
