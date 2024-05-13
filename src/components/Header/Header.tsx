import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.css";

function Header() {
  const pages = [
    { id: "0", name: "Projects", link: "projects" },
    { id: "1", name: "Playground", link: "playground" },
    { id: "2", name: "About", link: "about" },
  ];

  return (
    <div className="header">
      <h1 className="header-title">Karate.Studio</h1>
      <ul className="header-links">
        {pages.map((page) => (
          <li key={page.id} className="header-links-link">
            <a href={page.link}>{page.name}</a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </div>
  );
}

export default Header;
