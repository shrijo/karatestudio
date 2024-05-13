import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1 className="header-title">Karate.Studio</h1>
      <ul className="header-links">
        <li className="header-links-link">
          <NavLink
            to={`/`}
            className={({ isActive }) => {
              return isActive ? "current-page" : "";
            }}
          >
            Projects
          </NavLink>
        </li>
        <li className="header-links-link">
          <NavLink
            to={`/playground`}
            className={({ isActive }) => {
              return isActive ? "current-page" : "";
            }}
          >
            Playground
          </NavLink>
        </li>
        <li className="header-links-link">
          <NavLink
            to={`/about`}
            className={({ isActive }) => {
              return isActive ? "current-page" : "";
            }}
          >
            About
          </NavLink>
        </li>
      </ul>
      <ThemeToggle />
    </div>
  );
}

export default Header;
