import React from "react"
import NavbarSideStyles from "./styledComponents/NavbarSideStyles"

const NavbarSide = () => {
  return (
    <NavbarSideStyles>
      <div className="side-nav fixed" id="navbar">
        <ul>
          <li className="logo">
            <a
              className="scrool-link"
              href="#intro"
              aria-label="Navigate to the beginning of the page"
            >
              <h1>Teo Oliver</h1>
            </a>
          </li>
          <hr />
          <li className="active-link">
            <a
              className="scrool-link"
              href="#about"
              aria-label="Navigate to the beginning of the page"
            >
              <span>About</span>
            </a>
          </li>
          <hr />
          <li>
            <a
              className="scrool-link"
              href="#projects"
              aria-label="Navigate to the beginning of the page"
            >
              <span>Projects</span>
            </a>
          </li>
          <hr />

          <li>
            <a
              className="scrool-link"
              href="#skills"
              aria-label="Navigate to the beginning of the page"
            >
              <span>Skills</span>
            </a>
          </li>

          <hr />
          <li>
            <a
              className="scrool-link"
              href="#education"
              aria-label="Navigate to the beginning of the page"
            >
              <span>Education</span>
            </a>
          </li>

          <hr />
          <li>
            <a
              className="scrool-link"
              href="#contact"
              aria-label="Navigate to the beginning of the page"
            >
              <span>Contact</span>
            </a>
          </li>
          <hr />
          <li>
            <a
              className="logo-container"
              href="https://github.com/teo-oliver"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Resume</span>
            </a>
          </li>
          <hr />
        </ul>
      </div>
    </NavbarSideStyles>
  )
}

export default NavbarSide
