import "./App.css";
import "./styles/theme.css";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./Context/ThemeContent";

function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;