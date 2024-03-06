import React from "react";
import "./style.css";

const FavouriteCard = ({ recipe, onRemove }) => {
  const maxLength = 120;

  const ingredients = [];
  const measures = [];

  const truncatedInstructions =
    recipe.strInstructions.length > maxLength
      ? recipe.strInstructions.substring(
        0,
        recipe.strInstructions.lastIndexOf(" ", maxLength)
      ) + "..."
      : recipe.strInstructions;

  const handleRemove = () => {
    onRemove(recipe.idMeal);
  };

  const getIngredients= () => {
    Object.keys(recipe).forEach((key) => {
        if (
          key.includes("strIngredient") &&
          recipe[key] !== "" &&
          recipe[key] !== null
        ) {
          ingredients.push(recipe[key]);
        }

        if (
          key.includes("strMeasure") &&
          recipe[key] !== "" &&
          recipe[key] !== null
        ) {
          measures.push(recipe[key]);
        }
          });
      };
      getIngredients();

  return (
    <div className="col-sm-12 mb-3" >
      <div className="card h-100 w-100 d-inline-block">
        <div className="row g-0">
          <div className="col-md-4">

            <img
              src={recipe.strMealThumb}
              className="card-img-top m-3"
              alt={recipe.strMeal}
            />
          <h3 className="m-3">Ingredients</h3>  
          <div className="favourite_ingredients m-3">
            {ingredients.map((ingredient, i) => (
              <div key={ingredient+i} className="favourite_ingredient">
                <span>{measures[i]}</span> <span>{ingredient}</span>
              </div>
            ))}
          </div>
          </div>
          <div className="col-md-8">
            <div className="card-body m-3">
              <h3 className="card-title m-3">{recipe.strMeal}</h3>
              <p className="card-text p-3">{recipe.strInstructions}</p>
            </div>
          </div>
          <div className="card-footer text-center">
            <button className="btn btn-primary m-3" onClick={handleRemove}>
              Remove from Favourites
            </button>
          </div>



        </div>
      </div>
    </div>
  );
};

export default FavouriteCard;
