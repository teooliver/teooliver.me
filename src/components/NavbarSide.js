import React from "react"
import NavbarSideStyles from "./styledComponents/NavbarSideStyles"
import { Link } from "react-scroll"

const NavbarSide = () => {
  return (
    <NavbarSideStyles>
      <div className="side-nav fixed" id="navbar">
        <ul>
          <li className="logo">
            <Link
              activeClass="active"
              className="scrool-link"
              to="intro"
              spy={true}
              smooth={true}
              duration={500}
              aria-label="Navigate to the beginning of the page"
            >
              <h1>Teo Oliver</h1>
            </Link>
          </li>
          <hr />
          <li>
            <Link
              activeClass="active"
              className="scrool-link"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              aria-label="Navigate to the beginning of the page"
            >
              <span>About</span>
            </Link>
          </li>
          <hr />
          <li>
            <Link
              activeClass="active"
              className="scrool-link"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              aria-label="Navigate to the beginning of the page"
            >
              <span>Projects</span>
            </Link>
          </li>
          <hr />

          <li>
            <Link
              activeClass="active"
              className="scrool-link"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              aria-label="Navigate to the beginning of the page"
            >
              <span>Skills</span>
            </Link>
          </li>

          <hr />
          <li>
            <Link
              activeClass="active"
              className="scrool-link"
              to="education"
              spy={true}
              smooth={true}
              duration={500}
              aria-label="Navigate to the beginning of the page"
            >
              <span>Education</span>
            </Link>
          </li>

          <hr />
          <li>
            <Link
              activeClass="active"
              className="scrool-link"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              aria-label="Navigate to the beginning of the page"
            >
              <span>Contact</span>
            </Link>
          </li>
          <hr />
          <li>
            <a
              className="logo-container"
              href="https://github.com/teo-oliver"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Code</span>
            </a>
          </li>
          <hr />
        </ul>
      </div>
    </NavbarSideStyles>
  )
}

export default NavbarSide
