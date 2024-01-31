import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-t">
        Kalvium ❤️
      </Link>
      <ul>
        <li><Link to="/Contacts">Contacts</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
    </nav>
  );
}
