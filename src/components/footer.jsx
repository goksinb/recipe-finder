// src/components/Header.js
import {Link} from "react-router-dom";

function Footer() {
  return (
    <header>
      <nav>
        <h1>Recipe Finder</h1>
        <Link to="/">Homepage</Link>
      </nav>
    </header>
  );
}

export default Footer;
