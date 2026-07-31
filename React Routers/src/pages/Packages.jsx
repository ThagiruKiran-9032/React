import { Link } from "react-router-dom";

function Packages() {
  return (
    <div>
      <h1>Travel Packages</h1>

      <ul>
        <li>
          <Link to="/packages/1">Beach Vacation</Link>
        </li>

        <li>
          <Link to="/packages/2">Mountain Adventure</Link>
        </li>

        <li>
          <Link to="/packages/3">Dubai Tour</Link>
        </li>

        <li>
          <Link to="/packages/4">Kerala Backwaters</Link>
        </li>

        <li>
          <Link to="/packages/5">Goa Weekend Trip</Link>
        </li>
      </ul>
    </div>
  );
}

export default Packages;