import React from 'react';
import './ReviewList.css';
import ReviewRow from './ReviewRow';
import { useReviews } from '../contexts/ReviewsContext.js';

const ReviewList = () => {
    const reviews = useReviews();

    return (
        <div className='review-list'>
            {reviews.slice().reverse().map((review) => (
                <ReviewRow className='review-row' review={review} />
            ))}
        </div>
    );
};

export default ReviewList;