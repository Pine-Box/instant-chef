import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const BASEURL = "https://www.themealdb.com/api/json/v1/1";

  const fetchData = async (query) => {
    try {
      const response = await axios.get(`${BASEURL}/search.php?s=${query}`);
      setSearchResults(response.data.meals || []);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setSearchResults([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    fetchData(value);
  };

  const handleAddToFavourites = (meal) => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const isAlreadyFavourite = favourites.some(
      (favourite) => favourite.idMeal === meal.idMeal
    );

    if (!isAlreadyFavourite) {
      const updatedFavourites = [...favourites, meal];
      localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
      console.log("Recipe added to favourites:", meal);
    } else {
      console.log("Recipe is already in favourites:", meal);
    }
  };

  return (
    <div className="container">
      <div className="input-group mb-3">
        <span className="input-group-text" id="search-icon">
          <FaSearch />
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Type to search..."
          value={input}
          onChange={handleInputChange}
        />
      </div>
      <div className="row">
        {searchResults.map((meal) => (
          <div key={meal.idMeal} className="col-md-4">
            <div className="card">
              <Link to={`/recipe/${meal.idMeal}`} className="card-link">
                <img
                  src={meal.strMealThumb}
                  className="card-img-top"
                  alt={meal.strMeal}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
                <p className="card-text">{meal.strInstructions}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToFavourites(meal)}
                >
                  Add to Favourites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
