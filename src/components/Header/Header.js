import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <NavLink to="/cv">
          <li>Main</li>
        </NavLink>
        <NavLink to="/About">
          <li>About</li>
        </NavLink>
        <NavLink to="/Certificate">
          <li>Certificate</li>
        </NavLink>
        <NavLink to="/Proects">
          <li>Proects</li>
        </NavLink>
    </ul>
    </nav>
  );
}

export default Header;
