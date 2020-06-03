import styled from "styled-components";

const NavbarTopStyles = styled.nav`
  .hide-on-large.top {
    display: none;
    position: fixed;
    background-color: ${props => props.theme.navBackgroundColor};
    height: 60px;
    width: 100%;
    top: 0;
    z-index: 2;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);

    .navbar-title {
      text-transform: uppercase;
      text-align: center;
      padding-top: 21px;
      position: absolute;
      /* use calc */
      left: 44%;
      z-index: -1;
      color: ${props => props.theme.navTextColor};
      text-decoration: none;
    }

    button {
      margin: 0;
      padding: 0;
      border: none;
      background-color: transparent;
    }

    .open-nav-icon {
      color: ${props => props.theme.navTextColor};
      padding: 20px;
      width: 3rem;
      height: 3rem;
      font-size: 1.4rem;
      &:hover {
        color: ${props => props.theme.openNavIconHover};
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
      /* use flex */
      display: block;
      /* flex-direction: row; */
    }
  }
`;

export default NavbarTopStyles;
