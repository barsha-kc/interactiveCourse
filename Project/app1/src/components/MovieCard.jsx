import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, onFavoriteToggle, isFavorite }) => {
  const navigate = useNavigate();

  return (
    <div className="movie">
      <div
        className="movie-header"
        onClick={() => navigate(`/movies/${movie.id}`)}
      >
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

    <div className="movie-body">
      <div className="movie-title">
        <h3>{movie.title}</h3>
        <button className="fav-btn" onClick={() => onFavoriteToggle(movie.id)}>
          <i className={isFavorite ? "fas fa-heart active" : "far fa-heart"}></i>
        </button>
      </div>
    </div>
  </div>
  );
};

export default MovieCard;
