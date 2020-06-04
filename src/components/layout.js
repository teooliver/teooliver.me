/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { ThemeChangeContext } from "../context/ThemeChangeContext";
import Header from "./header";
import GlobalStyles from "../components/styledComponents/GlobalStyles";
import "./layout.css";
import { lightTheme, darkTheme } from "./styledComponents/themeVars";
import Footer from "./Footer";
import FooterStyles from "./styledComponents/FooterStyles";

const Layout = ({ children }) => {
  const { themeMode } = useContext(ThemeChangeContext);
  console.log("From layout: ", themeMode);
  return (
    <>
      <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header />
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
