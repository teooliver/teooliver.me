import React, { createContext, useState } from "react";

export const ThemeChangeContext = createContext("light");

export const ThemeChangeProvider = props => {
  const [themeMode, setThemeMode] = useState("light");

  const changeTheme = selected_theme => {
    setThemeMode(selected_theme);
  };

  console.log(themeMode);
  return (
    <ThemeChangeContext.Provider value={{ themeMode, changeTheme }}>
      {props.children}
    </ThemeChangeContext.Provider>
  );
};
