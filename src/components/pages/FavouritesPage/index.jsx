import React, { useEffect, useState } from "react";
import RecipeCard from "../../RecipeCard";
import "./style.css";


function FavouritesPage(){
  const [favourites, setFavourites] = useState([]);

  // Fetch favorite recipes from local storage
  useEffect(() => {
    const storedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []);

  // Handle removing a recipe from favourites
  const handleRemoveFromFavorites = (mealID) => {
    const updatedFavourites = favourites.filter(
      (recipe) => recipe.idMeal !== mealID
    );
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    };


    return (
      <div className="row m-3">
        {
          favourites.map((recipe)  => {
            return (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                addToFav={handleRemoveFromFavorites}
              />
            );
          })}
      </div>
      );
};
export default FavouritesPage;