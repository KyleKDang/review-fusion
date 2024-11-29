import React from 'react';
import MovieList from '../components/MovieList';
import movies from '../movies.js'

export default function Home({ handleReviewSubmit }) {
    return (
        <>
        <MovieList movies={movies} handleReviewSubmit={handleReviewSubmit} />
        </>
    )
}