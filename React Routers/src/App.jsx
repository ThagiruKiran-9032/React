import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Bookings from "./pages/Bookings";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import ProfileBookings from "./pages/ProfileBookings";
import ProfileSettings from "./pages/ProfileSettings";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Navbar from "./components/navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css'

function App() {
  const isLoggedIn = false;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<ProtectedRoute isLoggedIn={isLoggedIn}>
      <Profile />
    </ProtectedRoute>}>
          <Route path="bookings" element={<ProfileBookings />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
