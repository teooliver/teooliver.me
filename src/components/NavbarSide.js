import React from "react";
import NavbarSideStyles from "./styledComponents/NavbarSideStyles";
import { Link } from "react-scroll";
import ThemeButtons from "./ThemeButtons";

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
              <span>Side Projects</span>
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

          {/* <hr />
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
          </li> */}

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
              <span>
                <i className="fa fa-envelope"></i>Contact
              </span>
            </Link>
          </li>
          <hr />
          <li>
            <a
              className="logo-container"
              href="https://github.com/teooliver"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i className="fab fa-github"></i>Code
              </span>
            </a>
          </li>
          <hr />
          <li>
            <a
              className="logo-container"
              href="https://listed.to/@teooliver/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <i class="fas fa-blog"></i>Blog
              </span>
            </a>
          </li>
          <hr />
          <li>
            <ThemeButtons />
          </li>
        </ul>
      </div>
    </NavbarSideStyles>
  );
};

export default NavbarSide;
