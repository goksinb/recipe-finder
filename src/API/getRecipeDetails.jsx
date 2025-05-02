const getRecipeDetails = async (recipeId) => {
  const apiKey = "efb1a5f145d84a89aa0ba7988e138d65";
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
