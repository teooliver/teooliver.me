import React, { useContext } from "react";
import { ThemeChangeContext } from "../context/ThemeChangeContext";
import ThemeButtonStyles from "./styledComponents/ThemeButtonStyles";

const ThemeButtons = () => {
  const { changeTheme } = useContext(ThemeChangeContext);

  return (
    <ThemeButtonStyles>
      <button className="theme-button" onClick={() => changeTheme("dark")}>
        Dark
      </button>
      <button className="theme-button" onClick={() => changeTheme("light")}>
        Light
      </button>
    </ThemeButtonStyles>
  );
};

export default ThemeButtons;
