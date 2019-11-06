import styled from "styled-components"
// grid container
const NavbarSlideOnSmallStyles = styled.nav`
  .hide-on-large-slide {
    display: block;
    background-color: white;
    height: 100%;
    width: 164px;
    top: 0;
    left: ${props => (props.isOpen ? "0px" : "-164px")};
    position: fixed;
    overflow-x: hidden;
    padding-top: 20px;
    z-index: 10;
    transition: 500ms;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  h1 {
    font-size: 2.5rem;
    margin: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  ul {
    margin-top: 0;
    list-style-type: none;
    margin-left: 0;
    padding-left: 0px;
  }

  li a {
    padding: 20px;
  }

  li a,
  li a:hover {
    color: black;
    display: list-item;
    text-decoration: none;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.1);
    padding-left: 2px;
    border-left: 5px solid #2e2e3d;
    transition: 1000ms;
    transition: border-left 200ms;
  }

  .active {
    background-color: rgba(0, 0, 0, 0.1);
    transition: 100ms;
  }

  hr {
    padding: 0;
    margin: 0;
    height: 1px;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`

export default NavbarSlideOnSmallStyles
