import "./App.css";
import Homepage from "./pages/Homepage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RecipeDetails from "./pages/recipeDetails";

import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* Use BrowserRouter instead of <router> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
