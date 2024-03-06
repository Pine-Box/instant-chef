import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, addToFav }) => {
	const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
	return (
		<div className="col-sm-3 card-deck">
			<div className="card center-text">
				<img src={strMealThumb} className="card-image" />
				<div className="card-body">
					<span className="category">{strCategory}</span>
					<h3>{strMeal}</h3>
					<div className="d-flex justify-content-evenly align-items-center w-100">
						<Link to={`/recipe/${recipe.idMeal}`} className="btn btn-secondary">
							Ingredients
						</Link>
						{/* <a
              href={"https://www.themealdb.com/meal/" + idMeal}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Ingredients
            </a> */}
						<button
							className="btn btn-primary"
							onClick={() => {
								addToFav(recipe);
							}}
						>
							Add To Favourites
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
