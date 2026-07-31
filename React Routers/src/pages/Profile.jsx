import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>

      <nav>
        <Link to="bookings">Bookings</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Profile;