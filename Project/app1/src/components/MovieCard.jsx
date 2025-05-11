import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" style={{ width: '200px' }}>
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        style={{ width: '100%' }}
      />
      <h4>{movie.title}</h4>
    </div>
  );
};

export default MovieCard;
