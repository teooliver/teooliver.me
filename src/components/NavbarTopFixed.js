import React from "react"
import Nav from "./styledComponents/Nav"

const NavbarTopFixed = () => {
  return (
    <Nav>
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
    </Nav>
  )
}

export default NavbarTopFixed
