import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (loading) return <div className="loading">Loading movie details...</div>;
  if (!movie) return <div>Movie not found.</div>;

  return (
    <div className="movie-details-container">
      <Link to="/movies" className="back-link">
        <i className="fas fa-arrow-left"></i> Back to Movies
      </Link>

      <div className="movie-details">
        <div className="movie-image">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Overview:</strong></p>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
