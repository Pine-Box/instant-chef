import React from "react";
import "./style.css";

const FavouriteCard = ({ recipe, onRemove }) => {

    const maxLength = 120;

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

  return (
    <div className="col-sm-3">
      <div className="card">
        <img
          src={recipe.strMealThumb}
          className="card-img-top"
          alt={recipe.strMeal}
        />
        <div className="card-body">
          <h5 className="card-title">{recipe.strMeal}</h5>
          <p className="card-text">{truncatedInstructions}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
          <button className="btn btn-danger" onClick={handleRemove}>
            Remove from Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouriteCard;
