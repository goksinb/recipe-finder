// src/pages/Homepage.js
import {useState, useEffect} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import getRecipes from "../API/getRecipes";
import "../styles/Homepage.css";
import Header from "../components/header";
import BackgroundVideo from "../components/BackgroundVideo";

function Homepage() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  // If user came here with { state: { reset: true } }, clear UI and remove the flag
  useEffect(
    function () {
      if (location.state && location.state.reset) {
        setSearchTerm("");
        setRecipes([]);
        // remove the state so refreshes or other nav do not keep resetting
        navigate(".", {replace: true, state: null});
      }
    },
    [location.state, navigate]
  );

  useEffect(
    function () {
      if (!searchTerm.trim()) return;

      async function fetchRecipes() {
        try {
          const data = await getRecipes(searchTerm);
          if (Array.isArray(data)) {
            setRecipes(data);
          } else {
            setRecipes([]);
          }
        } catch (error) {
          console.error("Error fetching recipes:", error);
          setRecipes([]);
        }
      }

      fetchRecipes();
    },
    [searchTerm]
  );

  function handleSearch(e) {
    e.preventDefault();
    const input = e.target.elements.search.value.trim();
    if (input) {
      setSearchTerm(input);
    }
  }

  return (
    <div className={searchTerm ? "homepage white-bg" : "homepage"}>
      {!searchTerm && <BackgroundVideo />}
      <Header />

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
          {searchTerm && (
            <>
              {recipes.length > 0 ? (
                recipes.map(function (recipe) {
                  return (
                    <div className="recipeList" key={recipe.id}>
                      <div className="recipeContainer">
                        <Link to={`/recipe/${recipe.id}`}>
                          <h3>{recipe.title}</h3>
                        </Link>
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          style={{width: "150px"}}
                        />
                      </div>
                    </div>
                  );
                })
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
