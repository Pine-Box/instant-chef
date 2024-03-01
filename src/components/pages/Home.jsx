// import React, { useEffect, useState } from "react";
// import Favourites from "../favourites";

// function Home() {
//   const [favouriteRecipes, setFavouriteRecipes] = useState([]);

//   // Fetch favorite recipes from local storage
//   useEffect(() => {
//     const storedFavouriteRecipes =
//       JSON.parse(localStorage.getItem("favoriteRecipes")) || [];
//     setFavouriteRecipes(storedFavouriteRecipes);
//   }, []);

//     // Handle removal of a recipe from favourites
//     const handleRemoveFromFavourites = (idMeal) => {
//         const updatedFavourites = favouriteRecipes.filter(
//           (recipe) => recipe.idMeal !== idMeal
//         );
    
//         // Update local storage with the updated favourites list
//         localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    
//         // Update state to re-render the component
//         setFavouriteRecipes(updatedFavourites);
//       };


//   return (
//     <>
//       <Favourites favouriteRecipes={favouriteRecipes} onRemove={handleRemoveFromFavourites}/>
//     </>
//   );
// }

// export default Home;













// // Import React and other necessary modules
// import React, { useEffect, useState } from "react";
// import Favourites from "../favourites";

// // Modify the Home component
// function Home() {
//   // Modify the state variable name to match the changes
//   const [favouriteRecipes, setFavouriteRecipes] = useState([]);

//   // Fetch favourite recipes from local storage
//   useEffect(() => {
//     const storedFavouriteRecipes =
//       JSON.parse(localStorage.getItem("favourites")) || [];
//     setFavouriteRecipes(storedFavouriteRecipes);
//   }, []);

//   // Modify the function name to match the changes
//   const handleRemoveFromFavourites = (idMeal) => {
//     const updatedFavourites = favouriteRecipes.filter(
//       (recipe) => recipe.idMeal !== idMeal
//     );

//     // Update local storage with the updated favourites list
//     localStorage.setItem("favourites", JSON.stringify(updatedFavourites));

//     // Update state to re-render the component
//     setFavouriteRecipes(updatedFavourites);
//   };

//   // Return the modified JSX
//   return (
//     <>
//       <Favourites
//         favouriteRecipes={favouriteRecipes}
//         onRemove={handleRemoveFromFavourites}
//       />
//     </>
//   );
// }

// // Export the modified component
// export default Home;


import React, { useEffect, useState } from "react";
import Favourites from "../favourites";

function Home() {
  const [favourites, setFavourites] = useState([]);

  // Fetch favorite recipes from local storage
  useEffect(() => {
    const storedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(storedFavourites);
  }, []);

  // Handle removing a recipe from favourites
  const handleRemoveFromFavorites = (mealID) => {
    const updatedFavourites = favourites.filter(
      (recipe) => recipe.idMeal !== mealID
    );
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <>
      <Favourites
        favourites={favourites}
        onRemove={handleRemoveFromFavorites}
      />
    </>
  );
}

export default Home;