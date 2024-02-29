import React from "react";
import RecipeCard from "../RecipeCard";

function Recipes() {
  return (
    <>
      <h1>Popular recipies</h1>
      <div className="row">
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </>
  );
}

export default Recipes;
