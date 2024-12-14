import React from 'react';
import './ReviewRow.css';
import movies from '../movies';

const ReviewRow = ({ review }) => {
    const movie = movies[review.movieId-1];

    const hasUserEmail = review.userEmail !== null;
    const username = hasUserEmail ? review.userEmail.split('@')[0] : 'Anonymous'
    
    const hasTimestamp = review.timestamp !== null;
    const date = hasTimestamp ? review.timestamp.toDate() : '';
    const month = hasTimestamp ? date.getMonth() : '';
    const day = hasTimestamp ? date.getDate() : '';
    const year = hasTimestamp ? date.getFullYear() : '';

    return (
        <div className='review-row'>
            <div className='review-movie-details'>
                <img src={`/review-fusion${movie.poster}`} alt={movie.title} className="review-movie-poster" />
                <div className='review-movie-title'>{movie.title}</div>
            </div>
            <p className='review-text'>
                {review.reviewText}
            </p>
            <div className='review-details'>
                <span>Review By <strong>{username}</strong></span>
                <em>{hasTimestamp ? `${month}/${day}/${year}` : 'Just Now'}</em>
            </div>
        </div>
    );
};

export default ReviewRow;