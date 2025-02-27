import "./App.css";
import Homepage from "./pages/Homepage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RecipeDetails from "./pages/recipeDetails";

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* Use BrowserRouter instead of <router> */}
      <Routes>
        {" "}
        {/* Use Routes instead of <routes> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
