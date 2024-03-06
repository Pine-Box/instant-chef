import React from "react";

<<<<<<< HEAD
const RecipeCard = ({ recipe }) => {
  //   const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
  
=======
const RecipeCard = ({ recipe, addToFav }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
>>>>>>> 9413439c7f3c107d4c4a92354e6de7822e81d654
  return (
    <div className="col-sm-3">
      <div className="card">
        <img
          src={strMealThumb}
          alt="..."
          style={{ objectFit: "cover", width: "100%" }}
          className="card-image"
        />
        <div className="card-body">
          <span className="category">{strCategory}</span>
          <h3>{strMeal}</h3>
          <div className="d-flex justify-content-evenly align-items-center w-100">
            <a
              href={"https://www.themealdb.com/meal/" + idMeal}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Ingredients
            </a>
            <button
              className="btn btn-primary"
              onClick={() => {
                addToFav(recipe);
              }}
            >
              Add To Favourites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
