// src/components/Header.js
import {Link} from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <nav>
        {/* Logo goes Home and requests reset */}
        <Link to="/" state={{reset: true}}>
          <h1>Fridge Feast</h1>
        </Link>

        <div className="nav-links">
          {/* Home link also requests reset */}
          <Link to="/" state={{reset: true}}>
            Homepage
          </Link>
          {/*           <Link to="/recipes"> Recipes</Link> */}
          <Link to="/about"> About</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
