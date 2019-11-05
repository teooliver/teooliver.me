import styled from "styled-components"
// grid container
const NavbarSideStyles = styled.nav`
  h1 {
    font-size: 2.5rem;
    margin: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  .side-nav.fixed {
    height: 100%;
    width: 160px;
    top: 0;
    left: 0;
    position: fixed;
    overflow-x: hidden;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
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

  li.logo,
  li.logo:hover {
    font-weight: bolder;
    background-color: #ffffff;
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

  @media screen and (max-width: 900px) {
    position: relative;
    display: none;
  }
`

export default NavbarSideStyles
