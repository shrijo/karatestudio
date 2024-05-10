import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";

function Header() {
  const pages = [
    { name: "Projects", link: "projects" },
    { name: "Playground", link: "playground" },
    { name: "About", link: "about" },
  ];

  return (
    <div className="header">
      <h1 className="header-title">Karate.Studio</h1>
      <ul className="header-links">
        {pages.map((page) => (
          <li key={page.name} className="header-links-link">
            <a href={page.link}>{page.name}</a>
          </li>
        ))}
      </ul>
      <button className="theme-toggle">Toggle</button>
      <ThemeToggle />
    </div>
  );
}

export default Header;
