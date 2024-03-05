import React from "react";

const RecipeCard = ({ recipe }) => {
  //   const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
  
  return (
    <div className="col-sm-3">
      <div className="card">
        <img
          src="./src/assets/images/pexels-ella-olsson-1640777.jpg"
          alt="..."
          style={{ objectFit: "cover", width: "100%" }}
          className="card-image"
        />
        <div className="card-body">
          <span className="category">Category</span>
          <h3>Meal</h3>
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
