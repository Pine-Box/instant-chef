import React from "react";
import "./style.css";
import API from "../../utils/api";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const RecipeDetail = () => {
	const [recipe, setRecipe] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const [measures, setMeasures] = useState([]);
	const ingredientsCount = ingredients.length;
	const displayCount = Math.ceil(ingredientsCount / 2); // Show half of the records
let urlsa=""// "https://www.youtube.com/embed/1IszT_guI08"
	const { id } = useParams();
	useEffect(() => {
		const fetchRecipeDetails = async () => {
			try {
				const data = await API.mealLookUphById(`${id}`);

				setRecipe(data.data.meals[0]);

				Object.keys(data.data.meals[0]).forEach((key) => {
					if (
						key.includes("strIngredient") &&
						data.data.meals[0][key] !== "" &&
						data.data.meals[0][key] !== null
					) {
						setIngredients((prev) => {
							if (prev.length === 0) return [data.data.meals[0][key]];
							else return [...prev, data.data.meals[0][key]];
						});
					}

					if (
						key.includes("strMeasure") &&
						data.data.meals[0][key] !== "" &&
						data.data.meals[0][key] !== null
					) {
						setMeasures((prev) => {
							if (prev.length === 0) return [data.data.meals[0][key]];
							else return [...prev, data.data.meals[0][key]];
						});
					}
				});
			} catch (error) {
				console.error(error);
			}
		};
		fetchRecipeDetails();
       
	}, [id]);



	return (
		<div className="container">
			<div className="wrapper">
				<h2>Recipe Details</h2>
				<div className="recipe">
					<img src={recipe?.strMealThumb} />
					<div className="metadata">Title: {recipe?.strMeal}</div>
					<h3>Ingredients</h3>
					<div className="ingredients">
						{ingredients.slice(0, displayCount).map((ingredient, i) => (
							<div key={ingredient} className="ingredient">
								<span>
									{measures[i]} {ingredient}
								</span>
							</div>
						))}
					</div>
					<div>
						<h2>Instructions</h2>

						<p>{recipe.strInstructions}</p>
					</div>
				</div>
				<div className="video-container">
					{recipe.strYoutube && (
                            <iframe
                              width="560"
                              height="315"
                              src={`https://www.youtube.com/embed/${
                                recipe.strYoutube.split("watch?v=")[1]
                              }`}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          )}
				</div>
			</div>
		</div>
	);
};

export default RecipeDetail;
