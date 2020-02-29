/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// import React from "react"
// import { NavProvider } from "./src/context/NavContext"

// // eslint-disable-next-line react/prop-types
// export const wrapRootElement = ({ element }) => {
//   return <NavProvider>{element}</NavProvider>
// }

import React from "react";
import { ThemeChangeProvider } from "./src/context/ThemeChangeContext";

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <ThemeChangeProvider>{element}</ThemeChangeProvider>;
};
