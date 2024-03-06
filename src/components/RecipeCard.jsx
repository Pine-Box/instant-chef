import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe, addToFav }) => {
	const { idMeal, strMeal, strCategory, strMealThumb } = recipe;

	return (
		<div className="col-sm-3">
			<div className="card">
				<img
					src={strMealThumb}
					alt="..."
					style={{ objectFit: "cover", width: "100%" }}
					className="card-image"
				/>
				<div className="card-body">
					<span className="category">{strCategory}</span>
					<h3>{strMeal}</h3>
					<div className="d-flex justify-content-evenly align-items-center w-100">
						<Link to={`/recipe/${idMeal}`} className="btn btn-secondary">
							Ingredients
						</Link>

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
