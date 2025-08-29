import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import getRecipeDetails from "../API/getRecipeDetails";
import "../styles/recipedetails.css";
import {Link} from "react-router-dom";
import Header from "../components/header";

function RecipeDetails() {
  const {id} = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipeDetails(id);
      setRecipe(data);
      console.log("Recipe Details:", data);
      data.extendedIngredients.forEach((ingredient) => {
        console.log("Original Name:", ingredient.original);
      });
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div id="main-container">
      <Header />
      <div className="recipe">
        <h1 id="recipe-title">{recipe.title}</h1>
        <div className="recipe-container">
          <div id="recipe-image">
            <img src={recipe.image} alt={recipe.title} />
          </div>
          <div id="recipe-ingredients">
            <h2>Ingredients</h2>
            <ul>
              {recipe.extendedIngredients.map((ingredient, index) => (
                <li key={index}>{ingredient.original}</li>
              ))}
            </ul>
          </div>
        </div>
        <p dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
        <div id="recipe-instructions">
          <h2>Instructions</h2>
          <ul>
            {recipe.analyzedInstructions.map((instruction, index) => (
              <li key={index}>
                {instruction.steps.map((step, stepIndex) => (
                  <p key={stepIndex}>{step.step}</p> // Log each step's text here
                ))}
              </li>
            ))}
          </ul>
        </div>
        <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
          View Full Recipe
        </a>
      </div>
    </div>
  );
}

export default RecipeDetails;
