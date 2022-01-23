import React, { useContext } from "react";
import NavbarSlideOnSmallStyles from "./styledComponents/NavbarSlideOnSmallStyles";
import { Link } from "react-scroll";
import { NavContext } from "../context/NavContext";
import ThemeButtons from "./ThemeButtons";
import T_Logo from "./T_Logo";

const NavbarSlideOnSmall = () => {
  const { isOpen } = useContext(NavContext);

  return (
    <NavbarSlideOnSmallStyles isOpen={isOpen}>
      <div className="hide-on-large-slide" id="navbar">
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
              <div className="t_logo">
                <T_Logo />
              </div>
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

          {/* <li>
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
          </li> */}

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
    </NavbarSlideOnSmallStyles>
  );
};

export default NavbarSlideOnSmall;
