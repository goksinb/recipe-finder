const getRecipeDetails = async (recipeId) => {
  const apiKey = import.meta.env.API_KEY;

  const url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
};

export default getRecipeDetails;
