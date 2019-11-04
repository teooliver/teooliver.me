import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavbarTopFixed from "./NavbarTopFixed"

const Header = () => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <NavbarTopFixed />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
