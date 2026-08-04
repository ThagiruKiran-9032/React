import { useContext } from "react";
import ThemeContext from "../Context/ThemeContent";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className={theme === "dark" ? "dark" : "light"}>
        <h1>Footer</h1>
      <p>Built with React and Context API</p>
      <p>Theme received in Footer: {theme}</p>
    </footer>
  );
}

export default Footer;