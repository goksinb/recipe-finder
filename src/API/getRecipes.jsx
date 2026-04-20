const getRecipes = async (ingredients) => {
  const apiKey = import.meta.env.API_KEY;
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${apiKey}&number=10`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

export default getRecipes;
