import {useState, useEffect} from "react";
import getRecipes from "../API/getRecipes";
import {Link} from "react-router-dom";
import "../styles/Homepage.css";
import Header from "../components/header";
/* import Footer from "../components/footer"; */

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
      <Header />
      {/*       <Footer /> */}

      <main>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Enter ingredients (e.g. chicken, zucchini)"
          />
          <button type="submit">Search</button>
        </form>

        <div className="recipes">
          {!searchTerm ? ( // if nothing is searched
            <>
              <p>Type some ingredients above to find recipes 🍲</p>

              {/* Show random recipes only when no search */}
              <div className="randomRecipes">
                <div className="homepageRecipe">
                  <h2>Stuffed Bell Peppers</h2>
                  <img src="public/images/Stuffed-Bell-Peppers-V2.jpg" alt="" />
                </div>
                <div className="homepageRecipe">
                  <h2>Beef Stroganoff</h2>
                  <img
                    src="public/images/One-Pot-Beef-and-Mushroom-Stroganoff-V1.jpg"
                    alt=""
                  />
                </div>
                <div className="homepageRecipe">
                  <h2>Easy Taco Soup</h2>
                  <img src="public/images/Taco-Soup-V2.jpg" alt="" />
                </div>
              </div>
            </>
          ) : (
            <>
              <h1>Recipes with {searchTerm}</h1>
              {recipes.length > 0 ? (
                recipes.map((recipe) => (
                  <div className="recipeList" key={recipe.id}>
                    <Link to={`/recipe/${recipe.id}`}>
                      <h3>{recipe.title}</h3>
                    </Link>
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      style={{width: "150px"}}
                    />
                  </div>
                ))
              ) : (
                <p>No recipes found.</p>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Homepage;
