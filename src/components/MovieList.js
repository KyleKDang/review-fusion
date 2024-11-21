import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies, onReviewSubmit }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onReviewSubmit={onReviewSubmit}
        />
      ))}
    </div>
  );
};

export default MovieList;
