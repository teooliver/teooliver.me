import React, { createContext, useState } from "react";

export const ThemeToggleContext = createContext("light");

export const ThemeToggleProvider = props => {
  const [theme, setTheme] = useState("light");

  // provavelmente nao precisa de nada disso, só usar useState e passar a string apropriada no click do botao

  //  na verdade precisa fazer uma funcao com setTheme para setar o state
  const handleThemeToggle = selected_theme => {
    switch (selected_theme) {
      case "light":
        setTheme(light_theme);
      case "dark":
        setTheme(dark_theme);
    }
    console.log(theme);
  };

  return (
    <ThemeChangeContext.Provider value={{ theme, handleThemeToggle }}>
      {props.children}
    </ThemeChangeContext.Provider>
  );
};
