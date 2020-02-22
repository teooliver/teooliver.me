import React, { useContext } from "react";
import NavbarTopStyles from "./styledComponents/NavbarTopStyles";
import { Link } from "react-scroll";
import { NavContext } from "../context/NavContext";

const NavbarTop = () => {
  const { handleSlideNav } = useContext(NavContext);

  return (
    <NavbarTopStyles>
      <div className="hide-on-large top">
        <button className="button-toggle-nav" onClick={() => handleSlideNav()}>
          <i className="open-nav-icon fas fa-bars"></i>
        </button>
        <div className="navbar-title" id="title">
          <Link
            className="title"
            to="intro"
            spy={true}
            smooth={true}
            duration={500}
          >
            Teo Oliver
          </Link>
        </div>
      </div>
    </NavbarTopStyles>
  );
};

export default NavbarTop;
