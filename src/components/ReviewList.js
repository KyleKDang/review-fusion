import React from 'react';
import './ReviewList.css';
import ReviewRow from './ReviewRow';

const ReviewList = ({ reviews }) => {
    return (
        <div className='review-list'>
            {reviews.map((review) => (
                <ReviewRow className='review-row' review={review} />
            ))}
        </div>
    );
};

export default ReviewList;