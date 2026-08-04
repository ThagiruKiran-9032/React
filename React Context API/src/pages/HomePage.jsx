import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default HomePage;
