import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import getRecipeDetails from "../components/getRecipeDetails";

function RecipeDetails() {
  const {id} = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipeDetails(id);
      setRecipe(data);
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <p dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
      <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer">
        View Full Recipe
      </a>
    </div>
  );
}

export default RecipeDetails;
