import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function FavoritesPage() {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ids = JSON.parse(localStorage.getItem("movieIds")) || [];
    setFavoriteIds(ids);

    async function fetchFavorites() {
      try {
        const promises = ids.map((id) =>
          fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
          ).then((res) => res.json())
        );
        const movies = await Promise.all(promises);
        setFavoriteMovies(movies);
      } catch (err) {
        console.error("Error fetching favorite movies:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchFavorites();
  }, []);

  const removeFavorite = (id) => {
    const updatedIds = favoriteIds.filter((favId) => favId !== id);
    setFavoriteIds(updatedIds);
    setFavoriteMovies(favoriteMovies.filter((movie) => movie.id !== id));
    localStorage.setItem("movieIds", JSON.stringify(updatedIds));
  };

  return (
    <div className="movies-page">
      <h1 className="movies-title">My Favorite Movies</h1>

      {loading ? (
        <p>Loading your favorites...</p>
      ) : favoriteMovies.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="movies-grid">
          {favoriteMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={true}
              onFavoriteToggle={removeFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
