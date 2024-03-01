import React from "react";
import API from "../../utils/api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Recipes() {
  const [randomRecipe, setRandomRecipe] = useState(null);

  useEffect(() => {
    // Fetch a random recipe when the component mounts
    API.randomnMeal()
      .then((response) => {
        // Log the response data to the console
        console.log(response.data);

        // Set the random recipe in the component state
        setRandomRecipe(response.data.meals[0]);
      })
      .catch((error) => {
        console.error("Error fetching random recipe:", error);
      });
  }, []); 

  const handleAddToFavourites = () => {
    if (!randomRecipe) {
      // Handle the case where there is no random recipe yet
      console.warn("No random recipe available.");
      return;
    }

    // Retrieve existing favourites from local storage or initialize an empty array
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    // Check if the recipe is already in the favourites
    const isAlreadyFavourite = favourites.some(
      (favourite) => favourite.idMeal === randomRecipe.idMeal
    );

    if (!isAlreadyFavourite) {
      // If not, add the recipe to the favourites array
      const updatedFavourites = [...favourites, randomRecipe];

      // Update local storage with the new favourites list
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));

      console.log("Recipe added to favourites:", randomRecipe);
    } else {
      console.log("Recipe is already in favourites:", randomRecipe);
    }

  };

  return (
    <div>
      <h2>Random Recipe</h2>
      {randomRecipe ? (
        <div className="card">
          <img
            src={randomRecipe.strMealThumb}
            className="card-img-top"
            alt={randomRecipe.strMeal}
          />
          <div className="card-body">
            <h5 className="card-title">{randomRecipe.strMeal}</h5>
            <p className="card-text">{randomRecipe.strInstructions}</p>
            <button className="btn btn-primary" onClick={handleAddToFavourites}>
              Add to Favourites
            </button>
          </div>
        </div>
      ) : (
        <p>Loading random recipe...</p>
      )}
    </div>
  );
}

export default Recipes;
