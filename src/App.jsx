import React, { useState, useEffect } from 'react';

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import Recipes from './components/pages/Recipes';
import RandomRecipe from './components/pages/RandomRecipe';
import CountrySelect from './components/pages/CountrySelect';
import SearchBar from './components/SearchBar'
import Favorites from './components/Favorites'
import RecipeCard from './components/RecipeCard'
import Modal from './components/Modal'


const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    const fetchRandomRecipe = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      setRecipes([response.data.meals[0]]); // Update state with random recipe
    };
    fetchRandomRecipe();
  }, []);

  const handleSearch = async (term) => {
    setSearchTerm(term);
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
    setRecipes(response.data.meals || []); // Update state with searched recipes or empty array
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    const fetchByCountry = async () => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
      setRecipes(response.data.meals || []); // Update state with country-specific recipes or empty array
    };
    fetchByCountry();
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.strArea === selectedCountry || !selectedCountry
  ); // Filter recipes by country or show all if none selected

function App() {
  return (
    <Router>
      <NavTabs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes/*" element={<Recipes />} />
        <Route path="suggestions" element={<Suggestions />} />
        <Route path="contact" element={<Contact />} />
        <Route path="meals" element={<Meals />} />
      </Routes>
    </Router>
  );
}
}

export default App
