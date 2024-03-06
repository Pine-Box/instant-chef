import React, { useState, useEffect } from "react";
import API from "../../utils/api";
import RecipeCard from "../RecipeCard";

const handleCountrySelect = () => {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch the country list from your API
    API.mealCountryList()
      .then((response) => {
        console.log(response);
        // Extract country names from the API response
        const countries = response.data.meals.map((meal) => meal.strArea);
        setCountryList(countries);
      })
      .catch((error) => {
        console.error("Error fetching country list:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch recipes based on the selected country
    if (selectedCountry) {
      API.filterByCountry(selectedCountry)
        .then((response) => {
          // Limit to the first 4 recipes for simplicity
          console.log(response.data.meals)
          const limitedRecipes = response.data.meals.slice(0, 4);
          setRecipes(limitedRecipes);
        })
        .catch((error) => {
          console.error(
            `Error fetching recipes for ${selectedCountry}:`,
            error
          );
        });
    }
  }, [selectedCountry]);

  const handleSelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="container">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Country
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {countryList.map((country, index) => (
            <li key={index}>
              <button
                className="dropdown-item"
                onClick={() => handleSelect(country)}
              >
                {country}
              </button>
            </li>
          ))}
          {/* <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li> */}
        </ul>
      </div>

      <div className="recipe-cards">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default handleCountrySelect;
