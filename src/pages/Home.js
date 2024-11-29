import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import movies from '../movies.js'

export default function Home() {
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
        <h1>Home</h1>
        <MovieList movies={movies} onReviewSubmit={handleReviewSubmit} />
        </>
    )
}