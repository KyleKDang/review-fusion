import React from 'react';
import './ReviewList.css';
import ReviewRow from './ReviewRow.js';
import { useReviews } from '../contexts/ReviewsContext.js';

const ReviewList = ({ movies }) => {
    const reviews = useReviews();

    return (
        <div className='review-list'>
            {reviews.slice().reverse().map((review) => (
                <ReviewRow className='review-row' movies={movies} review={review} />
            ))}
        </div>
    );
};

export default ReviewList;