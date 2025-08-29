// src/components/Header.js
import {Link} from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">
          <h1>Fridge Feast</h1>
        </Link>
        <div className="nav-links">
          <Link to="/">Homepage</Link>
          <Link to="/recipes"> Recipes</Link>
          <Link to="/about"> About</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
