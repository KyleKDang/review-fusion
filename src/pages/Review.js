import React from 'react';
import ReviewList from '../components/ReviewList.js';
import { useReviews } from '../contexts/ReviewsContext.js';

export default function Review({ movies }) {
    const reviews = useReviews()
    
    return (
        <>
        {reviews.length === 0 && <h1><em>No reviews have been submitted yet</em></h1>}
        <ReviewList movies={movies} />
        </>
    )
}