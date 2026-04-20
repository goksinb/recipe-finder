// src/components/Header.js
import {Link} from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/" state={{reset: true}}>
          <h1>Fridge Feast</h1>
        </Link>

        <div className="nav-links">
          <Link to="/" state={{reset: true}}>
            Homepage
          </Link>

          <Link to="/about"> About</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
