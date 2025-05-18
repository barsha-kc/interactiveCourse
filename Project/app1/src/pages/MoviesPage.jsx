import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Search from "../components/Search";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [isSearching, setIsSearching] = useState(false);


  const fetchPopularMovies = async () => {
    setLoading(true);
    setIsSearching(false);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      setError("Failed to load movies.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (searchTerm) => {
    if (!searchTerm) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      setError("Search failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleBackToPopular = async () => {
    setIsSearching(false);
    fetchPopularMovies();
  };
  

  const toggleFavorite = (movieId) => {
    const updatedFavorites = favoriteIds.includes(movieId)
      ? favoriteIds.filter((id) => id !== movieId)
      : [...favoriteIds, movieId];

    setFavoriteIds(updatedFavorites);

    localStorage.setItem("movieIds", JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
        );

        const data = await response.json();
        console.log("Full API response:", data);

        setMovies(data.results);
      } catch (err) {
        console.error("Failed to fetch:", err);
        setError("Failed to load movies.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
    const savedFavorites = JSON.parse(localStorage.getItem("movieIds")) || [];
    setFavoriteIds(savedFavorites);
  }, []);

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="movies-page">
      <h1 className="movies-title">Popular Movies</h1>

      <Search onSearch={handleSearch} />
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favoriteIds.includes(movie.id)}
            onFavoriteToggle={toggleFavorite}
          />
        ))}
      </div>
     
    </div>
  );
  ;
}

export default MoviesPage;
