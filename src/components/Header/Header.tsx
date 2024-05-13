import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Karate.Studio</h1>
      <ul className="header-links">
        <li className="header-links-link">
          <Link to={`/projects`}>Projects</Link>
        </li>
        <li className="header-links-link">
          <Link to={`/playground`}>Playground</Link>
        </li>
        <li className="header-links-link">
          <Link to={`/about`}>About</Link>
        </li>
      </ul>
      <ThemeToggle />
    </div>
  );
}

export default Header;
