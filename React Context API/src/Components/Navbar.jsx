import { useContext } from "react";
import ThemeContext from "../Context/ThemeContent";

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className={theme === "dark" ? "dark" : "light"}>
      <h2>Theme Switcher</h2>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      
    </nav>
  );
}

export default Navbar;