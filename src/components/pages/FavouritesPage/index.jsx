import React, { useEffect, useState } from "react";
import Favourites from "../../favourites";
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
      <>
      <Favourites
        favourites={favourites}
        onRemove={handleRemoveFromFavorites}
      />
    </>
      );
};
export default FavouritesPage;