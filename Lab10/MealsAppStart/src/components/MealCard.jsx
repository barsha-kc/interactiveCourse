import React from 'react'

const MealCard = ({mealData, isRandom = false, isFavorited, onToggleFavorite }) => {
  return (
    <div className="meal">
      <div className="meal-header">
          {isRandom && <span className="random">Meal of the Day</span>}
          <img src={mealData.strMealThumb} alt=""/>
      </div>
      <div className="meal-body">
          <h3>{mealData.strMeal}</h3>
          <button className="fav-btn" onClick={() => onToggleFavorite(mealData)} >
              <i className={`fas fa-heart ${isFavorited ? 'active' : ''}`}></i>
          </button>
      </div>
    </div>
  )
}

export default MealCard