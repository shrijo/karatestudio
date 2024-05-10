import "./ThemeToggle.css";

const ThemeToggle = () => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    setDarkTheme();
  }
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkTheme();
    else setLightTheme();
  };
  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        className="theme-toggle-input"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
    </div>
  );
};

export default ThemeToggle;
