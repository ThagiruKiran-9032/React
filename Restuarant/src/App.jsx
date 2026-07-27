import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RestaurantList from "./components/RestaurantList";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <RestaurantList />
      <Menu />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;