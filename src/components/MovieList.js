import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

const MovieList = ({ movies, handleReviewSubmit }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          handleReviewSubmit={handleReviewSubmit}
        />
      ))}
    </div>
  );
};

export default MovieList;
