import "./ThemeToggle.css";

const ThemeToggle = () => {
  const setDarkTheme = () => {
    document.querySelector("html")?.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightTheme = () => {
    document.querySelector("html")?.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };
  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    setDarkTheme();
  }
  const toggleTheme = (e: any) => {
    if (e.target.checked) setDarkTheme();
    else setLightTheme();
  };
  return (
    <div className="theme-toggle">
      <input
        type="checkbox"
        id="check"
        className="theme-toggle-input"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <label htmlFor="check" id="lightLabel">
        Light
      </label>
      <label htmlFor="check" id="darkLabel">
        Dark
      </label>
    </div>
  );
};

export default ThemeToggle;
