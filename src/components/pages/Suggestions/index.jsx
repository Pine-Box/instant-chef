import React, { useEffect, useState } from "react";
import API from "../../../utils/api";
import { Link } from "react-router-dom";
function Suggestions() {
	const [randomRecipe, setRandomRecipe] = useState(null);

	useEffect(() => {
		API.randomnMeal()
			.then((response) => {
				setRandomRecipe(response.data.meals[0]);
			})
			.catch((error) => {
				console.error("Error fetching random recipe:", error);
			});
	}, []);

	const handleAddToFavourites = () => {
		if (!randomRecipe) {
			console.warn("No random recipe available.");
			return;
		}

		const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
		const isAlreadyFavourite = favourites.some(
			(favourite) => favourite.idMeal === randomRecipe.idMeal
		);

		if (!isAlreadyFavourite) {
			const updatedFavourites = [...favourites, randomRecipe];
			localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
			console.info("Recipe added to favourites:", randomRecipe);
		} else {
			console.info("Recipe is already in favourites:", randomRecipe);
		}
	};

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			{" "}
			{/* Center the card horizontally */}
			<div style={{ maxWidth: "75%", padding: "10px" }}>
				{" "}
				{/* Adjust the maxWidth to make it 25% smaller */}
				<h2
					style={{ textAlign: "center", padding: "50px 0", color: "#FF0000" }}
				>
					Give this recipe a go!
				</h2>
				{randomRecipe ? (
					<div
						style={{
							maxWidth: "100%",
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Link to={`/recipe/${randomRecipe.idMeal}`}>
							<img
								src={randomRecipe.strMealThumb}
								style={{ maxWidth: "100%", height: "500px" }}
								alt={randomRecipe.strMeal}
							/>
						</Link>
						<div style={{ flex: 1 }}>
							<h3 style={{ marginBottom: "5px", color: "#FF0000" }}>
								{randomRecipe.strMeal}
							</h3>
							<p style={{ marginBottom: "10px" }}>
								{randomRecipe.strInstructions}
							</p>
							<button
								className="btn btn-primary"
								style={{ marginTop: "10px" }}
								onClick={handleAddToFavourites}
							>
								Add to Favourites
							</button>
						</div>
					</div>
				) : (
					<p>Loading random recipe...</p>
				)}
			</div>
		</div>
	);
}

export default Suggestions;
