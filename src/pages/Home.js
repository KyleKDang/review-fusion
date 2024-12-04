import React from 'react';
import MovieList from '../components/MovieList';
import movies from '../movies.js'

export default function Home() {
    return (
        <>
        <MovieList movies={movies} />
        </>
    )
}