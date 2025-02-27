const getRecipes = async (ingredients) => {
  const apiKey = "efb1a5f145d84a89aa0ba7988e138d65";
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}&number=2`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return Array.isArray(data) ? data : []; // Ensure it's an array
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return []; // Return an empty array in case of error
  }
};

export default getRecipes;
