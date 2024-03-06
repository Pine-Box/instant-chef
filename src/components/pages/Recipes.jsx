import React, { useState, useEffect } from "react";
import RecipeCard from "../RecipeCard";
import RecipeDetail from "../RecipeDetail/RecipeDetail";
import API from "../../utils/api";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const currentPath = window.location.pathname;

  useEffect(() => {
    const fetchRandomRecipes = async () => {
      try {
        const responses = [];
        for (let i = 0; i < 4; i++) {
          const resp = await API.randomnMeal();
          responses.push(resp.data.meals[0]);
        }
        setRecipes(responses);
      } catch (error) {}
    };
    fetchRandomRecipes();
  }, []);

  const handleAddToFavourites = (recipe) => {
    if (!recipe) {
      // Handle the case where there is no random recipe yet
      console.warn("No random recipe available.");
      return;
    }

    // Retrieve existing favourites from local storage or initialize an empty array
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    // Check if the recipe is already in the favourites
    const isAlreadyFavourite = favourites.some(
      (favourite) => favourite.idMeal === recipe.idMeal
    );

    if (!isAlreadyFavourite) {
      // If not, add the recipe to the favourites array
      const updatedFavourites = [...favourites, recipe];

      // Update local storage with the new favourites list
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));

      console.info("Recipe added to favourites:", recipe);
    } else {
      console.info("Recipe is already in favourites:", recipe);
    }
  };

  return (
    <>
      <h1>Popular recipies</h1>
      <div className="row">
        {recipes.length === 4 &&
          recipes.map((recipe) => {
            return (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                addToFav={handleAddToFavourites}
              />
            );
          })}
      </div>
      {currentPath === "/recipes" && <RecipeDetail />}
    </>
  );
}

export default Recipes;
