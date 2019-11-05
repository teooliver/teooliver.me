import React from "react"
import NavbarTopStyles from "./styledComponents/NavbarTopStyles"
import { Link, animateScroll as scroll } from "react-scroll"

const NavbarTop = () => {
  return (
    <NavbarTopStyles>
      <div className="hide-on-large top">
        <a className="button-toggle-nav">
          <i className="open-nav-icon fas fa-bars"></i>
        </a>
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
  )
}

export default NavbarTop
