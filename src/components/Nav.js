import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function Nav() {
    return (
      <nav>
        <ul>
        <li>
        <Link smooth to="/#home">Home</Link>
        </li>
        <li>
          <Link smooth to="/#about">About</Link>
        </li>
        <li>
        <Link smooth to="/#menu">Menu</Link>
        </li>
        <li>
          <NavLink to="/reservations" className={({ isActive }) => (isActive ? "active" : "")}>
          Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/order-online" className={({ isActive }) => (isActive ? "active" : "")}>
          Order Online
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
          Login
          </NavLink>
        </li>
      </ul>
      </nav>
    );
  }
  
  export default Nav;