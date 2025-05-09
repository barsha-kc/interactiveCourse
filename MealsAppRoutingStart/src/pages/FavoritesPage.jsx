import Favorites from '../components/Favorites';
import { useEffect, useState } from 'react';

const MEAL_BYID_API = import.meta.env.VITE_MEAL_BYID_API;

const FavoritesPage = () => {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  useEffect(() => {
    const mealIds = JSON.parse(localStorage.getItem('mealIds')) || [];

    const fetchFavorites = async () => {
      const meals = await Promise.all(
        mealIds.map(id =>
          fetch(MEAL_BYID_API + id).then(res => res.json()).then(data => data.meals[0])
        )
      );
      setFavoriteMeals(meals);
    };

    fetchFavorites();
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favoriteMeals.filter(meal => meal.idMeal !== id);
    setFavoriteMeals(updatedFavorites);
    localStorage.setItem('mealIds', JSON.stringify(updatedFavorites.map(m => m.idMeal)));
  };

  return (
    <div>
      <h2>Your Favorites</h2>
      <Favorites favoriteMeals={favoriteMeals} removeFavorite={removeFavorite} />
    </div>
  );
};

export default FavoritesPage;
