import React, { useState, useEffect } from "react";
import "./style.css";
import RecipeCard from "../RecipeCard";
import RecipeDetail from "../RecipeDetail";
import API from "../../utils/api";





function RecipesByCountry() {

  const [selectedOption, setSelectedOption] = useState('American');
  const [recipes, setRecipes] = useState([]);


  const currentPath = window.location.pathname;

  useEffect(() => {
    const fetchRecipes = () => {
      try {
        API.filterByCountry(selectedOption)
        .then(function (resp) {
          const responses = [];
          for (let i = 0; i < resp.data.meals.length; i++) {
            responses.push(resp.data.meals[i]);
            if (i == 3) break;
          }
          setRecipes(...[responses]);
      });

      } catch (error) {console.error(error) }
    };
    fetchRecipes();
  }, [selectedOption]);

  const changeCountryHandler = (e) => {
    setSelectedOption(e.target.value);
  }

  const handleAddToFavourites = (recipe) => {
    if (!recipe) {
      // Handle the case where there is no random recipe yet
      console.warn("No recipes available.");
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
      <div className="d-flex">
        <h1>{selectedOption} Recipes</h1>
        <div className="px-3 py-2">
          <label>
            Pick a Country:
            <select
              value={selectedOption}
              onChange={(e) => changeCountryHandler(e)}
            >
          <option value="American">American</option>
          <option value="British">British</option>
          <option value="Canadian">Canadian</option>
          <option value="Chinese">Chinese</option>
          <option value="Croatian">Croatian</option>
          <option value="Dutch">Dutch</option>
          <option value="Egyptian">Egyptian</option>
          <option value="Filipino">Filipino</option>
          <option value="French">French</option>
          <option value="Greek">Greek</option>
          <option value="Indian">Indian</option>
          <option value="Irish">Irish</option>
          <option value="Italian">Italian</option>
          <option value="Jamaican">Jamaican</option>
          <option value="Japanese">Japanese</option>
          <option value="Kenyan">Kenyan</option>
          <option value="Malaysian">Malaysian</option>
          <option value="Mexican">Mexican</option>
          <option value="Moroccan">Moroccan</option>
          <option value="Polish">Polish</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Russian">Russian</option>
          <option value="Spanish">Spanish</option>
          <option value="Thai">Thai</option>
          <option value="Tunisian">Tunisian</option>
          <option value="Turkish">Turkish</option>
          <option value="Vietnamese">Vietnamese</option>
            </select>
          </label>
        </div>
      </div>
      <div className="row ">
        {
          recipes.map((recipe)  => {
            return (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                addToFav={handleAddToFavourites}
              />
            );
          })}
        {currentPath === "/recipes" && <RecipeDetail />}
      </div>
    </>
  );
}

export default RecipesByCountry;