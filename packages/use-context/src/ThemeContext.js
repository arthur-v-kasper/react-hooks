import React, { useState, useContext } from "react";

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

// export const useThemeUpdate = () => {
//   useContext(ThemeUpdateContext);
// };

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  function handleClick() {
    console.log("passei");
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={handleClick}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  useContext(ThemeContext);
};
