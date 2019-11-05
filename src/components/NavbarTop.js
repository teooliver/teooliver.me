import React from "react"
import NavbarTopStyles from "./styledComponents/NavbarTopStyles"

const NavbarTop = () => {
  return (
    <NavbarTopStyles>
      <div className="hide-on-large top">
        <a className="button-toggle-nav">
          <i className="open-nav-icon fas fa-bars"></i>
        </a>
        <div className="navbar-title" id="title ">
          <a className="title" href="#intro">
            Teo Oliver
          </a>
        </div>
      </div>
    </NavbarTopStyles>
  )
}

export default NavbarTop
