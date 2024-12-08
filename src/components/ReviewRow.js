import React from 'react';
import './ReviewRow.css';
import movies from '../movies';

const ReviewRow = ({ review }) => {
    const movie = movies[review.movieId-1];

    return (
        <div className='review-row'>
            <div className='review-movie-details'>
                <img src={`/review-fusion${movie.poster}`} alt={movie.title} className="review-movie-poster" />
                <div className='review-movie-title'>{movie.title}</div>
            </div>
            <p className='review-text'>
                {review.reviewText}
            </p>
        </div>
    );
};

export default ReviewRow;