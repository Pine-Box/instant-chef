import React, { useEffect, useState } from "react";;
import HandleCountrySelect from "./CountrySelector";
import Recipes from "./Recipes";
import RecipesByCategory from "../RecipesByCategory";
import RecipesByCountry from "../RecipesByCountry";

function Home() {
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
      <Recipes />
      <RecipesByCategory />
      <RecipesByCountry />
    </>
  );
}

export default Home;
