import { createContext, useContext } from "react";

const ThemeContext = createContext({ theme: "light" });

function ThemeBox() {
  const { theme } = useContext(ThemeContext);

  return <p>Current theme: {theme}</p>;
}

function UseContext() {
  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      <ThemeBox />
    </ThemeContext.Provider>
  );
}

export default UseContext;
