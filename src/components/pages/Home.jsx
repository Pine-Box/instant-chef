import React, { useState } from "react";
// import HandleCountrySelect from "./CountrySelector";

function Home() {
  const [recipes, setRecipes] = useState([]);

  const selectCountryAndGetData = async (event) => {
    console.log(event.target.value);
    const data = await fetch(
      "www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
    );
    // setRecipes(data);
    setRecipes([1, 2, 3]);
  };
  return (
    <>
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
          onChange={selectCountryAndGetData}
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="Whatever">Three</option>
        </select>
      </div>
      {/* recipe container */}
      {recipes && (
        <div>
          {recipes.map((recipe) => {
            // render a recipe component with recipe data in here
            return <div>whatevs</div>;
          })}
        </div>
      )}
    </>
  );
}

export default Home;
