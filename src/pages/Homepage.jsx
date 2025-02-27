import {useState, useEffect} from "react";
import getRecipes from "../components/getRecipes";
import {Link} from "react-router-dom";

function Homepage() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchTerm.trim()) return;

    const fetchRecipes = async () => {
      try {
        console.log("Fetching recipes for:", searchTerm); // Debug log
        const data = await getRecipes(searchTerm);
        console.log("Fetched data:", data); // Debug log
        if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          console.error("Unexpected data format:", data);
          setRecipes([]);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setRecipes([]);
      }
    };

    fetchRecipes();
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    const input = e.target.elements.search.value.trim();
    if (input) {
      console.log("User searched for:", input); // Debug log
      setSearchTerm(input);
    }
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Enter ingredients (e.g., chicken, zucchini)"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <p key={recipe.id} style={{marginBottom: "20px"}}>
              <Link to={`/recipe/${recipe.id}`}>
                <h3>{recipe.title}</h3>
              </Link>
              <img
                src={recipe.image}
                alt={recipe.title}
                style={{width: "150px"}}
              />
            </p>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </ul>
    </div>
  );
}

export default Homepage;
