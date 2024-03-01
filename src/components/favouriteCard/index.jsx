// import React from "react";
// import "./style.css";

// const FavouriteCard = ({ recipe, onRemove }) => {
//     const handleRemoveClick = () => {
//         // Call the onRemove function passed from the parent component
//         if (onRemove) {
//           onRemove(recipe.idMeal);
//         }
//       };

//   return (
//     <div className="col-sm-3">
//       <div className="card">
//         <img
//           src={recipe.strMealThumb}
//           className="card-img-top"
//           alt={recipe.strMeal}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{recipe.strMeal}</h5>
//           <p className="card-text">{recipe.strInstructions}</p>
//           <a href="#" className="btn btn-primary">
//             Go somewhere
//           </a>
//           <button className="btn btn-danger" onClick={handleRemoveClick}>
//             Remove from Favourites
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FavouriteCard;

// I see, it seems there's a confusion with the naming of the state variables. Let's make sure we're using consistent names for the state variable across components. It appears that there might be a mismatch between favouriteRecipes and favourites names.

// Here's an updated version with consistent names:

// Update Favourites.jsx:
// jsx
// Copy code
// import React from "react";
// import FavouriteCard from "../favouriteCard";
// import "./style.css";

// const Favourites = ({ favourites, onRemove }) => {
//   if (!favourites || !Array.isArray(favourites) || favourites.length === 0) {
//     return (
//       <div className="container" id="containerStyle">
//         <h3>Favourites</h3>
//         <p>No favorite recipes yet.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container" id="containerStyle">
//       <h3>Favourites</h3>
//       <div className="row" id="jumbotron">
//         {favourites.map((recipe) => (
//           <FavouriteCard
//             key={recipe.idMeal}
//             recipe={recipe}
//             onRemove={() => onRemove(recipe.idMeal)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Favourites;

import React from "react";
import "./style.css";

const FavouriteCard = ({ recipe, onRemove }) => {

    const maxLength = 120;

const truncatedInstructions =
  recipe.strInstructions.length > maxLength
    ? recipe.strInstructions.substring(
        0,
        recipe.strInstructions.lastIndexOf(" ", maxLength)
      ) + "..."
    : recipe.strInstructions;

  const handleRemove = () => {
    onRemove(recipe.idMeal);
  };

  return (
    <div className="col-sm-3">
      <div className="card">
        <img
          src={recipe.strMealThumb}
          className="card-img-top"
          alt={recipe.strMeal}
        />
        <div className="card-body">
          <h5 className="card-title">{recipe.strMeal}</h5>
          <p className="card-text">{truncatedInstructions}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
          <button className="btn btn-danger" onClick={handleRemove}>
            Remove from Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouriteCard;
