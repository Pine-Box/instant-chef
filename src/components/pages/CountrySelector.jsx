import React, { useState, useEffect } from "react";
import axios from "axios";

const handleCountrySelect = () => {
  const [countries, setCountries] = useState([]); // array to store countries
  const [selectedCountry, setSelectedCountry] = useState(""); //this is the selected country
  const [recipies, setRecipies] = useState([]); // this is the array to store the recipies

  const countriesUrl = "https://restcountries.com/v3.1/all"; // API endpoint for countries
  const recipiesByCountryUrl = "www.themealdb.com/api/json/v1/1/filter.php?a="; // API endpoint for recipies by country

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get(countriesUrl);
      setCountries(response.data.map((country) => country.name.common));
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchRecipies = async () => {
      if (selectedCountry) {
        const response = await axios.get(
          `${recipiesByCountryUrl}${selectedCountry}`
        );
        setRecipies(response.data.meals || []); // updates the recipies or set an empty array
      }
    };
    fetchRecipies();
  }, [selectedCountry]); // run only when selected country changes

  const handleChanges = (e) => {
    selectedCountry(e.target.value);
  };

  return (
    <div className="container">
      <select value={selectedCountry} onChange={handleChanges}>
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      {recipies.length > 0 && (
        <div className="recipe-grid">
          <h2>Recipies from {selectedCountry}: </h2>
          {recipies.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default handleCountrySelect;
