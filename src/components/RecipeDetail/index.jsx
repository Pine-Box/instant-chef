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
  const videoUrl = "";
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
        //  const vd=data.data.meals[0].strYoutube.split("watch?v=");
        // videoUrl=vd.join("embed/");
      } catch (error) {
        console.error(error);
      }
    };
    fetchRecipeDetails();
  }, [id]);
  const updatevideoLink = (strVideo) => {
    const oldLink = strVideo.split("watch?v=");
    const videoUrl = oldLink.join("embed/");
    return videoUrl;
  };
  return (
    <div className="container">
      <div className="wrapper">
        <h2>Recipe Details</h2>
        <div className="recipe">
          <img src={recipe?.strMealThumb} />
          <div className="metadata">Title: {recipe?.strMeal}</div>
          <h3>Ingredients and measures</h3>
          <div className="ingredients">
            {ingredients.slice(0, displayCount).map((ingredient, i) => (
              <div key={ingredient} className="ingredient">
                <span>{measures[i]}</span> <span>{ingredient}</span>
              </div>
            ))}
          </div>
          <div>
            <h2>Instructions</h2>

            <p>{recipe.strInstructions}</p>
          </div>
        </div>
        <div className="video-container">
          <h1>video</h1>
          <iframe
            width="560"
            height="315"
            src={recipe.strYoutube} //TODO: RESOLVE HOw to repalce watch with embeded/ </div> //"https://www.youtube.com/embed/4aZr5hZXP_s" //{recipe.strYoutube}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
    // </div>
    // <div className="recipe-container">
    // 	<div className="wrapper">
    // 		<div className="recipe">
    // 			{/* <div className="recipe-image"> */}
    // 			<img src={recipe?.strMealThumb} alt="Food" className="img" />
    // 			{/* </div> */}
    // 			<div className="metadata">{recipe.strMeal}</div>
    // 			<div className="ingredient">
    // 				<div className="ingredients">
    // 					<h2>Ingredients</h2>
    // 					<ul>
    // 						{ingredients.map((ingredient, index) => (
    // 							<li key={index}>
    // 								{measures[index]} {ingredient}
    // 							</li>
    // 						))}
    // 					</ul>
    // 				</div>
    // 				<div>
    // 					<h2>Instructions</h2>

    // 					<p>{recipe.strInstructions}</p>
    // 				</div>
    // 			</div>
    // 			<div className="video-container">
    // 				<h1>video</h1>
    // 				<iframe
    // 					width="560"
    // 					height="315"
    // 					src="https://www.youtube.com/embed/4aZr5hZXP_s" //{recipe.strYoutube}
    // 					title="YouTube video player"
    // 					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    // 					allowFullScreen
    // 				></iframe>
    // 			</div>
    // 		</div>
    // 	</div>
    // </div>
  );
};

export default RecipeDetail;
