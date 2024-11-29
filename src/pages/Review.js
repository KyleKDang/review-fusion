import React from 'react';
import ReviewList from '../components/ReviewList';

export default function Review({ reviews }) {
    return (
        <>
        <ReviewList reviews={reviews} />
        </>
    )
}