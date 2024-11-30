import React from 'react';
import ReviewList from '../components/ReviewList';

export default function Review({ reviews }) {
    return (
        <>
        {reviews.length === 0 && <h1><em>No reviews have been submitted yet</em></h1>}
        <ReviewList reviews={reviews} />
        </>
    )
}