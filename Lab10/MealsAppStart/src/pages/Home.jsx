import Search from "../components/Search";
import Favorites from "../components/Favorites";
import MealCard from "../components/MealCard";
import { useEffect, useState } from "react";

const RANDOM_API = import.meta.env.VITE_RANDOM_MEAL_API;
const MEAL_BYID_API = import.meta.env.VITE_MEAL_BYID_API;
const SEARCH_API = import.meta.env.VITE_SEARCH_MEAL_API;


console.log("RANDOM_API:", RANDOM_API);


const Home = () => {
  const [randomMeal, setRandomMeal] = useState(null);
  const [favoriteMeals, setFavoriteMeals] = useState([]);
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  const [searchResults, setSearchResults] = useState([]);


  //console.log(RANDOM_API)

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteMeals')) || [];
  setFavoriteMeals(storedFavorites);
  setFavoriteMealIds(storedFavorites.map(meal => meal.idMeal));
  },[]);

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals));
  }, [favoriteMeals]);


  useEffect(() => {
    loadRandomMeal();
  }, []);

  const loadRandomMeal = async () => {
    const resp = await fetch(RANDOM_API);
    const data = await resp.json();
    let meal = data.meals[0];
    console.log(meal);
    setRandomMeal(meal);
  }




  const toggleFavorite = (meal) => {
    const isAlreadyFavorite = favoriteMealIds.includes(meal.idMeal);
    let updatedFavorites;
  
    if (isAlreadyFavorite) {
      updatedFavorites = favoriteMeals.filter(m => m.idMeal !== meal.idMeal);
    } else {
      updatedFavorites = [...favoriteMeals, meal];
    }
  
    setFavoriteMeals(updatedFavorites);
    setFavoriteMealIds(updatedFavorites.map(m => m.idMeal));
  };

  const handleSearch = async (query) => {
    try {
      const resp = await fetch(`${SEARCH_API}${query}`);
      const data = await resp.json();
      setSearchResults(data.meals || []); 
    } catch (err) {
      console.error("Search error:", err);
      setSearchResults([]);
    }
  };
  

  

  const getMealById = async (id) => {
    const resp = await fetch(MEAL_BYID_API + id);
    const data = await resp.json();
    let meal = data.meals[0];
    //console.log(meal);
    return meal;
  }

  const removeFavorite = (id) => {
    const updatedFavorites = favoriteMeals.filter(meal => meal.idMeal !== id);
    setFavoriteMeals(updatedFavorites);
    setFavoriteMealIds(updatedFavorites.map(meal => meal.idMeal));
  };

  
  return (
    <div className="store">
    <Search onSearch={handleSearch}/>
    
    <Favorites favoriteMeals={favoriteMeals} onRemove={removeFavorite} />
    
    <div className="meals" id="meals">
      {randomMeal && (
      <MealCard 
        mealData={randomMeal}
        isRandom={true}
        isFavorited={favoriteMealIds.includes(randomMeal.idMeal)}
        onToggleFavorite={toggleFavorite}

      />
      )}
    </div>

{searchResults.length > 0 && (
  <div className="search-results">
    <h2>Search Results</h2>
    <div className="meals">
      {searchResults.map((meal) => (
        <MealCard
          key={meal.idMeal}
          mealData={meal}
          isFavorited={favoriteMealIds.includes(meal.idMeal)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  </div>

)}

  </div>
  )

  
}

export default Home