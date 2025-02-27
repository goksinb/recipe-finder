import "./App.css";
import Homepage from "./pages/Homepage";
import {Route} from "react-router-dom";
import RecipeDetails from "./pages/recipeDetails";

function App() {
  return (
    <router>
      <routes>
        <div className="Homepage">
          <Route path="/" element={<Homepage />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </div>
      </routes>
    </router>
  );
}

export default App;
