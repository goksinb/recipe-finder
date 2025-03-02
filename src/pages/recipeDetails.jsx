import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import getRecipeDetails from "../components/getRecipeDetails";
import "../styles/recipedetails.css";

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
      <h1 id="recipe-title">{recipe.title}</h1>
      <div id="recipe-image">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <p dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
      <div id="recipe-ingredients">
        <h2>Ingredients</h2>
        <ul>
          {recipe.extendedIngredients.map((ingredient, index) => (
            <li key={index}>{ingredient.original}</li>
          ))}
        </ul>
      </div>
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
  );
}

export default RecipeDetails;
