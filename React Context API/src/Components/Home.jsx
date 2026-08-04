import { useContext } from "react";
import ThemeContext from "../Context/ThemeContent";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme === "dark" ? "dark" : "light"}>
        <h1>Home Page</h1>
      <h2>Welcome to the Theme Switcher</h2>
      <p>This project helps us learn how theme changes can be shared across components.</p>
      <p>Theme received in Home: {theme}</p>
    </main>
  );
}

export default Home;