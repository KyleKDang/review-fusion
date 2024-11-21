import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import movies from '../movies.js'

export default function Review() {
    
    const [reviews, setReviews] = useState([]);
    
    const handleReviewSubmit = (movieId, reviewText) => {
        setReviews([
          ...reviews,
          {
            movieId,
            reviewText,
          },
        ]);
    };

    return (
        <>
        <h1>Review</h1>
        <MovieList movies={movies} onReviewSubmit={handleReviewSubmit} />
        </>
    )
}