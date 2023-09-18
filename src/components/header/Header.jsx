import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import "./header.scss";
import Navbar from "./Navbar";
import Logo from "./Logo";

export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="header">
        <div className="container">
          <Logo />
          <Navbar toggleMenu={toggleMenu} />
          <div
            className="menu"
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          >
            {toggleMenu ? <FaXmark /> : <FaBars />}
          </div>
        </div>
      </div>
    </>
  );
};
