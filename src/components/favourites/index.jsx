import React from "react";
import FavouriteCard from "../favouriteCard";
import "./style.css";

const Favourites = ({ favourites, onRemove }) => {
  if (!favourites || !Array.isArray(favourites) || favourites.length === 0) {
    return (
      <div className="container" id="containerStyle">
        <h3>Favourites</h3>
        <p>No favourite recipes yet.</p>
      </div>
    );
  }

  return (
    <div className="container" id="containerStyle">
      <h3>Favourites</h3>
      <div className="row" id="jumbotron">
        {favourites.map((recipe) => (
          <FavouriteCard
            key={recipe.idMeal}
            recipe={recipe}
            onRemove={() => onRemove(recipe.idMeal)}
          />
        ))}
        {/* <FavouriteCard/>
            <FavouriteCard/>
            <FavouriteCard/>
            <FavouriteCard/> */}
      </div>
    </div>
  );
};

export default Favourites;
