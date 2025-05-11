import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoriteIds, setFavoriteIds] = useState([]);

  const toggleFavorite = (movieId) => {
    const updatedFavorites = favoriteIds.includes(movieId)
      ? favoriteIds.filter((id) => id !== movieId)
      : [...favoriteIds, movieId];
  
    setFavoriteIds(updatedFavorites);
  
    localStorage.setItem('movieIds', JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );

        const data = await response.json();
        console.log("Full API response:", data); 

        setMovies(data.results);
      } catch (err) {
        console.error("Failed to fetch:", err);
        setError('Failed to load movies.');
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
    const savedFavorites = JSON.parse(localStorage.getItem('movieIds')) || [];
  setFavoriteIds(savedFavorites);

  }, []);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Popular Movies</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {movies.map((movie) => (
          <MovieCard 
          key={movie.id} 
          movie={movie}
          isFavorite={favoriteIds.includes(movie.id)}
          onFavoriteToggle={toggleFavorite}/>
        ))}
      </div>
    </div>
  );
}

export default MoviesPage;
