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
      flex-grow: 4;
      text-align: center;
      a {
        text-transform: uppercase;
        text-decoration: none;
        font-size: 1.4rem;
        z-index: -1;
        color: ${props => props.theme.navTextColor};
      }
    }

    .button-toggle-nav {
      button {
        /* width: 3rem; */
        margin: 1rem;
        padding: 0;
        border: none;
        background-color: transparent;
        .open-nav-icon {
          color: ${props => props.theme.navTextColor};
          font-size: 1.4rem;
          &:hover {
            cursor: pointer;
            color: ${props => props.theme.openNavIconHover};
            /* rotate */
          }
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .hide-on-large.top {
      display: flex;
      flex-direction: row;
      align-items: center;
      /* justify-content: center; */
    }
  }
`;

export default NavbarTopStyles;
