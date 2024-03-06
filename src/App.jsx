import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Recipes from "./components/pages/Recipes";
import Suggestions from "./components/pages/Suggestions";
import Contact from "./components/pages/Contact";
import FavouritesPage from "./components/pages/FavouritesPage";
import RecipeCard from "./components/RecipeCard";
import RecipeSearch from "./components/pages/RecipeSearch";
import RecipeDetail from "./components/RecipeDetail";


function App() {
  return (
    <div className="container min-vh-100 w-full justify-content-center align-items-center gap-15px">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="recipes/*" element={<Recipes />} />
          <Route path="recipesearch" element={<RecipeSearch />} />
          <Route path="suggestions" element={<Suggestions />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path='/recipe/:id' element={<RecipeDetail /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
