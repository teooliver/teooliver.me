import styled from "styled-components"
// grid container
const Nav = styled.nav`
  .navbar-title {
    color: black;
    text-transform: uppercase;
  }
  a.title {
    color: black;
    text-decoration: none;
  }

  .hide-on-large.top {
    display: none;
  }

  @media screen and (max-width: 900px) {
    .hide-on-large.top {
      display: block;
      position: fixed;
      background-color: white;
      height: 64px;
      width: 100%;
      top: 0;
      z-index: 2;
      box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
      padding-top: 20px;
    }
    .navbar-title {
      text-align: center;
      width: 100%;
      position: absolute;
      z-index: -1;
    }
  }
`

export default Nav
