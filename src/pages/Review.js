import React from 'react';
import ReviewList from '../components/ReviewList';
import { useReviews } from '../ReviewsContext.js';

export default function Review() {
    const reviews = useReviews()
    
    return (
        <>
        {reviews.length === 0 && <h1><em>No reviews have been submitted yet</em></h1>}
        <ReviewList />
        </>
    )
}