import styled from "styled-components"
// grid container
const NavbarTopStyles = styled.nav`
  .hide-on-large.top {
    display: none;
    position: fixed;
    background-color: white;
    height: 60px;
    width: 100%;
    top: 0;
    z-index: 2;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);

    .navbar-title {
      color: black;
      text-transform: uppercase;
      text-align: center;
      padding-top: 21px;
      position: absolute;
      left: 44%;
      z-index: -1;

      .title {
        color: black;
        text-decoration: none;
      }
    }

    button {
      margin: 0;
      padding: 0;
      border: none;
      background-color: transparent;
    }

    .open-nav-icon {
      color: black;
      padding: 20px;
      &:hover {
        color: #008073;
        /* rotate */
      }
    }

    .button-toggle-nav {
      float: left;
      /* margin-left: 20px; */
    }
    a.button-toggle-nav:hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 900px) {
    .hide-on-large.top {
      display: block;
      flex-direction: row;
    }
  }
`

export default NavbarTopStyles
