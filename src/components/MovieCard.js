import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import './MovieCard.css';
import { useReviewsUpdate } from '../ReviewsContext.js';

const MovieCard = ({ movie }) => {
  const handleReviewSubmit = useReviewsUpdate()

  const [reviewText, setReviewText] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleInputChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleSubmitReview = () => {
    handleReviewSubmit(movie.id, reviewText);
    setShowReviewForm(showReviewForm => !showReviewForm);
    setReviewText('');
  };

  const handleShowReviewForm = () => {
    setShowReviewForm(showReviewForm => !showReviewForm);
  }

  return (
    <div className="movie-card">
      <img src={`/review-fusion${movie.poster}`} alt={movie.title} className="movie-poster" />
      <div className="movie-details">
        <div className='movie-title-container'>
          <h2>{movie.title}</h2>
        </div>
        <p>{movie.genre}</p>
        <p>{movie.releaseDate}</p>
        <p>IMDb Rating: {movie.rating}</p>
      </div>
      <div className="review-form-container">
        <button className='review-button' onClick={handleShowReviewForm}>
          {showReviewForm ? 
          <img src='/review-fusion/icons/down-arrow.png' alt='show less' /> :
          <div>Review</div>}
        </button>
        {showReviewForm && <ReviewForm className='review-form'
          reviewText={reviewText}
          handleInputChange={handleInputChange}
          handleSubmitReview={handleSubmitReview}
        />}
      </div>
    </div>
  );
};

export default MovieCard;
