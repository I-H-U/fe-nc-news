import "../NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <nav>
        <Link to="/">
          <img className="logo" src="/ncnews.png" alt="NC news logo" />
        </Link>
        <ul>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
