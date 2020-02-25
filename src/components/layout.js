/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import { ThemeProvider } from "styled-components";
import "./layout.css";

const theme = {
  red: "#ff0000",
  black: "#393939",
};

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <div>
          <main>{children}</main>
          <footer></footer>
        </div>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
