import React, { useContext } from "react";
import NavbarTopStyles from "./styledComponents/NavbarTopStyles";
import { Link } from "react-scroll";
import { NavContext } from "../context/NavContext";

const NavbarTop = () => {
  const { handleSlideNav } = useContext(NavContext);

  return (
    <NavbarTopStyles>
      <div className="hide-on-large top">
        <div className="button-toggle-nav">
          <button onClick={() => handleSlideNav()}>
            <i className="open-nav-icon fas fa-bars"></i>
          </button>
        </div>
        <div className="navbar-title">
          <Link to="intro" spy={true} smooth={true} duration={500}>
            Teo Oliver
          </Link>
        </div>
        <div className="dummy"></div>
      </div>
    </NavbarTopStyles>
  );
};

export default NavbarTop;
