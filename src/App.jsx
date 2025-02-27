import "./App.css";
import Homepage from "./pages/Homepage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RecipeDetails from "./pages/recipeDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
