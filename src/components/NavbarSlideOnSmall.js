import React, { useContext } from "react"
import NavbarSlideOnSmallStyles from "./styledComponents/NavbarSlideOnSmallStyles"
import { Link, animateScroll as scroll } from "react-scroll"
import { NavContext } from "../context/NavContext"

const NavbarSlideOnSmall = () => {
  const { isOpen } = useContext(NavContext)

  return (
    <NavbarSlideOnSmallStyles isOpen={isOpen}>
      <div className="hide-on-large-slide" id="navbar">
        <ul>
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
              <span>Resume</span>
            </a>
          </li>
          <hr />
        </ul>
      </div>
    </NavbarSlideOnSmallStyles>
  )
}

export default NavbarSlideOnSmall
