import React from "react";

const RecipeCard = ({ recipe }) => {
  
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
  return (
    <div className="col-sm-3">
      <div className="card">
        <img
          src={strMealThumb}
          alt="..."
          style={{ objectFit: "cover", width: "100%" }}
          className="card-image"
        />
        <div className="card-body" id={idMeal}>
          <span className="category">{strCategory}</span>
          <h3>{strMeal}</h3>
          <a
            //   href={"https://www.themealdb.com/meal/" + idMeal}
            href="https://www.themealdb.com/meal/"
            target="_blank"
            rel="noreferrer"
          >
            Ingredients
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
