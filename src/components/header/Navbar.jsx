import { FaHouse, FaUser, FaUserPlus, FaFolderClosed } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar({ toggleMenu }) {
  return (
    <>
      <ul className={`list ${toggleMenu ? "open" : ""}`}>
        <li>
          <Link to="/">
            <FaHouse className="icon" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaFolderClosed className="icon" />
            About
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaUser className="icon" />
            Login
          </Link>
        </li>
        <li>
          <Link to="/register">
            <FaUserPlus className="icon" />
            Register
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
