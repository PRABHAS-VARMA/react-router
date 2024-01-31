import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Kavlium ❤️
      </Link>
      <ul>
        <li><Link to="/Contacts">Contacts</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
    </nav>
  );
}
